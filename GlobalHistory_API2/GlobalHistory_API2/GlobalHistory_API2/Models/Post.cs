using System;
using System.Collections.Generic;

#nullable disable

namespace GlobalHistory_API2.Models
{
    public partial class Post
    {
        public Post()
        {
            Comments = new HashSet<Comment>();
            PostTags = new HashSet<PostTag>();
        }

        public int PostId { get; set; }
        public int UserId { get; set; }
        public int? CatId { get; set; }
        public string PostTitle { get; set; }
        public string PostImage { get; set; }
        public bool? PostPublished { get; set; }
        public string Description { get; set; }
        public byte[] CreatedAt { get; set; }

        public virtual Category Cat { get; set; }
        public virtual User User { get; set; }
        public virtual ICollection<Comment> Comments { get; set; }
        public virtual ICollection<PostTag> PostTags { get; set; }
    }
}
