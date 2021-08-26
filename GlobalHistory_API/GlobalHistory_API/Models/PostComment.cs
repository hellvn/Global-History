using System;
using System.Collections.Generic;

#nullable disable

namespace GlobalHistory_API.Models
{
    public partial class PostComment
    {
        public int Id { get; set; }
        public int? UserId { get; set; }
        public int? PostId { get; set; }
        public string Comment { get; set; }

        public virtual Post Post { get; set; }
        public virtual User User { get; set; }
    }
}
