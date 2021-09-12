using System;
using System.Collections.Generic;

#nullable disable

namespace GlobalHistory_API2.Models
{
    public partial class Category
    {
        public Category()
        {
            PostCats = new HashSet<PostCat>();
        }

        public string CatName { get; set; }
        public byte[] CreatedAt { get; set; }

        public virtual ICollection<PostCat> PostCats { get; set; }
    }
}
