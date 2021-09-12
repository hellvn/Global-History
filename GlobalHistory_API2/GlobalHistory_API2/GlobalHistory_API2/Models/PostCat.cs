using System;
using System.Collections.Generic;

#nullable disable

namespace GlobalHistory_API2.Models
{
    public partial class PostCat
    {
        public int PostId { get; set; }
        public string CatName { get; set; }

        public virtual Category CatNameNavigation { get; set; }
        public virtual Post Post { get; set; }
    }
}
