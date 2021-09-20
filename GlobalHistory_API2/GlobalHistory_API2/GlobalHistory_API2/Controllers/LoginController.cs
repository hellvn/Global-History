using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Caching;
using Microsoft.IdentityModel.Tokens;
using System.IdentityModel.Tokens.Jwt;
using System.Security.Claims;
using System.Text;
using Microsoft.Extensions.Configuration;
using GlobalHistory_API2.Models;

namespace GlobalHistory_API2.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class LoginController : ControllerBase
    {
        public IConfiguration _configuration;
        private readonly GlobalHistoryContext _context;

        public LoginController(IConfiguration configuration,GlobalHistoryContext context)
        {
            _configuration = configuration;
            _context = context; 
        }
        
        [HttpPost]
        public async Task<IActionResult> Post(User _userData)
        {
            if (_userData != null && _userData.Email != null && _userData.Password != null)
            {
                //Kiem tra user va tra ve token neu login thanh cong
                var user = await _context.Users.FirstOrDefaultAsync(u => u.Email == _userData.Email && u.Password == _userData.Password);
                if (user != null)
                {
                    //tim thay user -> sinh ra token de tra ve
                    var claims = new[]
                    {
                        new Claim(JwtRegisteredClaimNames.Sub,_configuration["Jwt:Subject"]),
                        new Claim(JwtRegisteredClaimNames.Jti,Guid.NewGuid().ToString()),
                        new Claim(JwtRegisteredClaimNames.Iat,DateTime.Now.ToString()),
                        new Claim("UserId",user.UserId.ToString()),
                        new Claim("Email",user.Email.ToString()),
                    };
                    var key = new SymmetricSecurityKey(Encoding.UTF8.GetBytes(_configuration["Jwt:key"]));
                    var sign = new SigningCredentials(key, SecurityAlgorithms.HmacSha256);
                    var token = new JwtSecurityToken(_configuration["Jwt:Issuer"], _configuration["Jwt:Audience"], claims, expires: DateTime.Now.AddDays(1), signingCredentials: sign)
                    {
                        //return token
                    };
                    return Ok(new JwtSecurityTokenHandler().WriteToken(token));
                }
                return BadRequest("Email or password invalid");

            }
            return BadRequest();
        }
    }
}
