using System;
using System.Collections.Generic;

#nullable disable

namespace GlobalHistory_API.Models
{
    public partial class Post
    {
        public Post()
        {
            PostComments = new HashSet<PostComment>();
            PostDescriptions = new HashSet<PostDescription>();
            PostTags = new HashSet<PostTag>();
        }

        public int Id { get; set; }
        public int? UserId { get; set; }
        public string Title { get; set; }
        public string Img { get; set; }

        public virtual User User { get; set; }
        public virtual ICollection<PostComment> PostComments { get; set; }
        public virtual ICollection<PostDescription> PostDescriptions { get; set; }
        public virtual ICollection<PostTag> PostTags { get; set; }
    }
}
