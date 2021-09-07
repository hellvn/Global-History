using System;
using System.Collections.Generic;

#nullable disable

namespace GlobalHistory_API2.Models
{
    public partial class PostTag
    {
        public int PostId { get; set; }
        public int TagId { get; set; }
        public byte[] CreatedAt { get; set; }

        public virtual Post Post { get; set; }
        public virtual Tag Tag { get; set; }
    }
}
