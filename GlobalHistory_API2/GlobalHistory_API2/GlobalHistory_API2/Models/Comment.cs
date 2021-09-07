using System;
using System.Collections.Generic;

#nullable disable

namespace GlobalHistory_API2.Models
{
    public partial class Comment
    {
        public int CommentId { get; set; }
        public int UserId { get; set; }
        public int PostId { get; set; }
        public string Comment1 { get; set; }
        public byte[] CreatedAt { get; set; }

        public virtual Post Post { get; set; }
        public virtual User User { get; set; }
    }
}
