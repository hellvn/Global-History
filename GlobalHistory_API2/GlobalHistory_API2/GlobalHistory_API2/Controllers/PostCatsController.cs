using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using GlobalHistory_API2.Models;

namespace GlobalHistory_API2.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class PostCatsController : ControllerBase
    {
        private readonly GlobalHistoryContext _context;

        public PostCatsController(GlobalHistoryContext context)
        {
            _context = context;
        }

        // GET: api/PostCats
        [HttpGet]
        public async Task<ActionResult<IEnumerable<PostCat>>> GetPostCats()
        {
            return await _context.PostCats.ToListAsync();
        }

        // GET: api/PostCats/5
        [HttpGet("{id}")]
        public async Task<ActionResult<PostCat>> GetPostCat(int id)
        {
            var postCat = await _context.PostCats.FindAsync(id);

            if (postCat == null)
            {
                return NotFound();
            }

            return postCat;
        }

        // PUT: api/PostCats/5
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPut("{id}")]
        public async Task<IActionResult> PutPostCat(int id, PostCat postCat)
        {
            if (id != postCat.PostId)
            {
                return BadRequest();
            }

            _context.Entry(postCat).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!PostCatExists(id))
                {
                    return NotFound();
                }
                else
                {
                    throw;
                }
            }

            return NoContent();
        }

        // POST: api/PostCats
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPost]
        public async Task<ActionResult<PostCat>> PostPostCat(PostCat postCat)
        {
            _context.PostCats.Add(postCat);
            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateException)
            {
                if (PostCatExists(postCat.PostId))
                {
                    return Conflict();
                }
                else
                {
                    throw;
                }
            }

            return CreatedAtAction("GetPostCat", new { id = postCat.PostId }, postCat);
        }

        // DELETE: api/PostCats/5
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeletePostCat(int id)
        {
            var postCat = await _context.PostCats.FindAsync(id);
            if (postCat == null)
            {
                return NotFound();
            }

            _context.PostCats.Remove(postCat);
            await _context.SaveChangesAsync();

            return NoContent();
        }

        private bool PostCatExists(int id)
        {
            return _context.PostCats.Any(e => e.PostId == id);
        }
    }
}
