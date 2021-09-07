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
    public class PostTagsController : ControllerBase
    {
        private readonly GlobalHistoryContext _context;

        public PostTagsController(GlobalHistoryContext context)
        {
            _context = context;
        }

        // GET: api/PostTags
        [HttpGet]
        public async Task<ActionResult<IEnumerable<PostTag>>> GetPostTags()
        {
            return await _context.PostTags.ToListAsync();
        }

        // GET: api/PostTags/5
        [HttpGet("{id}")]
        public async Task<ActionResult<PostTag>> GetPostTag(int id)
        {
            var postTag = await _context.PostTags.FindAsync(id);

            if (postTag == null)
            {
                return NotFound();
            }

            return postTag;
        }

        // PUT: api/PostTags/5
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPut("{id}")]
        public async Task<IActionResult> PutPostTag(int id, PostTag postTag)
        {
            if (id != postTag.PostId)
            {
                return BadRequest();
            }

            _context.Entry(postTag).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!PostTagExists(id))
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

        // POST: api/PostTags
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPost]
        public async Task<ActionResult<PostTag>> PostPostTag(PostTag postTag)
        {
            _context.PostTags.Add(postTag);
            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateException)
            {
                if (PostTagExists(postTag.PostId))
                {
                    return Conflict();
                }
                else
                {
                    throw;
                }
            }

            return CreatedAtAction("GetPostTag", new { id = postTag.PostId }, postTag);
        }

        // DELETE: api/PostTags/5
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeletePostTag(int id)
        {
            var postTag = await _context.PostTags.FindAsync(id);
            if (postTag == null)
            {
                return NotFound();
            }

            _context.PostTags.Remove(postTag);
            await _context.SaveChangesAsync();

            return NoContent();
        }

        private bool PostTagExists(int id)
        {
            return _context.PostTags.Any(e => e.PostId == id);
        }
    }
}
