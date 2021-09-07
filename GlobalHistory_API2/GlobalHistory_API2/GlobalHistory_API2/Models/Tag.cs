using System;
using System.Collections.Generic;

#nullable disable

namespace GlobalHistory_API2.Models
{
    public partial class Tag
    {
        public Tag()
        {
            PostTags = new HashSet<PostTag>();
        }

        public int TagId { get; set; }
        public string TagName { get; set; }
        public byte[] CreatedAt { get; set; }

        public virtual ICollection<PostTag> PostTags { get; set; }
    }
}
