using System;
using System.Collections.Generic;

#nullable disable

namespace Global_History.Models
{
    public partial class Post
    {
        public Post()
        {
            PostComments = new HashSet<PostComment>();
            UserViews = new HashSet<UserView>();
        }

        public int Id { get; set; }
        public int? UserId { get; set; }
        public string Slug { get; set; }
        public string Title { get; set; }
        public string Img { get; set; }
        public bool? Published { get; set; }
        public DateTime? CreatedAt { get; set; }
        public DateTime? UpdatedAt { get; set; }

        public virtual PostComment User { get; set; }
        public virtual ICollection<PostComment> PostComments { get; set; }
        public virtual ICollection<UserView> UserViews { get; set; }
    }
}
