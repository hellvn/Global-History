using System;
using System.Collections.Generic;

#nullable disable

namespace Global_History.Models
{
    public partial class PostComment
    {
        public PostComment()
        {
            Posts = new HashSet<Post>();
        }

        public int Id { get; set; }
        public int? UserId { get; set; }
        public int? PostId { get; set; }
        public string Comment { get; set; }

        public virtual Post Post { get; set; }
        public virtual ICollection<Post> Posts { get; set; }
    }
}
