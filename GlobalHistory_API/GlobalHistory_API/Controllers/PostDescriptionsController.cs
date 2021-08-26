using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using GlobalHistory_API.Models;

namespace GlobalHistory_API.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class PostDescriptionsController : ControllerBase
    {
        private readonly GlobalHistoryContext _context;

        public PostDescriptionsController(GlobalHistoryContext context)
        {
            _context = context;
        }

        // GET: api/PostDescriptions
        [HttpGet]
        public async Task<ActionResult<IEnumerable<PostDescription>>> GetPostDescriptions()
        {
            return await _context.PostDescriptions.ToListAsync();
        }

        // GET: api/PostDescriptions/5
        [HttpGet("{id}")]
        public async Task<ActionResult<PostDescription>> GetPostDescription(int id)
        {
            var postDescription = await _context.PostDescriptions.FindAsync(id);

            if (postDescription == null)
            {
                return NotFound();
            }

            return postDescription;
        }

        // PUT: api/PostDescriptions/5
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPut("{id}")]
        public async Task<IActionResult> PutPostDescription(int id, PostDescription postDescription)
        {
            if (id != postDescription.Id)
            {
                return BadRequest();
            }

            _context.Entry(postDescription).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!PostDescriptionExists(id))
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

        // POST: api/PostDescriptions
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPost]
        public async Task<ActionResult<PostDescription>> PostPostDescription(PostDescription postDescription)
        {
            _context.PostDescriptions.Add(postDescription);
            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateException)
            {
                if (PostDescriptionExists(postDescription.Id))
                {
                    return Conflict();
                }
                else
                {
                    throw;
                }
            }

            return CreatedAtAction("GetPostDescription", new { id = postDescription.Id }, postDescription);
        }

        // DELETE: api/PostDescriptions/5
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeletePostDescription(int id)
        {
            var postDescription = await _context.PostDescriptions.FindAsync(id);
            if (postDescription == null)
            {
                return NotFound();
            }

            _context.PostDescriptions.Remove(postDescription);
            await _context.SaveChangesAsync();

            return NoContent();
        }

        private bool PostDescriptionExists(int id)
        {
            return _context.PostDescriptions.Any(e => e.Id == id);
        }
    }
}
