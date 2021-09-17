using System;
using System.Collections.Generic;

#nullable disable

namespace GlobalHistory_API2.Models
{
    public partial class Category
    {
        public Category()
        {
            Posts = new HashSet<Post>();
        }

        public int CatId { get; set; }
        public string CatName { get; set; }
        public byte[] CreatedAt { get; set; }

        public virtual ICollection<Post> Posts { get; set; }
    }
}
