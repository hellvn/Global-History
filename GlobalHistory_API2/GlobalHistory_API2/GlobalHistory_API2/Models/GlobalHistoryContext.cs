using System;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata;

#nullable disable

namespace GlobalHistory_API2.Models
{
    public partial class GlobalHistoryContext : DbContext
    {
       /* public GlobalHistoryContext()
        {
        }
*/
        public GlobalHistoryContext(DbContextOptions<GlobalHistoryContext> options)
            : base(options)
        {
        }

        public virtual DbSet<Category> Categories { get; set; }
        public virtual DbSet<Comment> Comments { get; set; }
        public virtual DbSet<Post> Posts { get; set; }
        public virtual DbSet<PostTag> PostTags { get; set; }
        public virtual DbSet<Tag> Tags { get; set; }
        public virtual DbSet<User> Users { get; set; }

      /*  protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {
            if (!optionsBuilder.IsConfigured)
            {
#warning To protect potentially sensitive information in your connection string, you should move it out of source code. You can avoid scaffolding the connection string by using the Name= syntax to read it from configuration - see https://go.microsoft.com/fwlink/?linkid=2131148. For more guidance on storing connection strings, see http://go.microsoft.com/fwlink/?LinkId=723263.
                optionsBuilder.UseSqlServer("Data Source=DESKTOP-M7UHRSN\\SQLEXPRESS;Initial Catalog=GlobalHistory;Integrated Security=True ");
            }
        }*/

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.HasAnnotation("Relational:Collation", "SQL_Latin1_General_CP1_CI_AS");

            modelBuilder.Entity<Category>(entity =>
            {
                entity.HasKey(e => e.CatName);

                entity.ToTable("category");

                entity.Property(e => e.CatName)
                    .HasMaxLength(50)
                    .HasColumnName("cat_name");

                entity.Property(e => e.CreatedAt)
                    .IsRequired()
                    .IsRowVersion()
                    .IsConcurrencyToken()
                    .HasColumnName("created_at");
            });

            modelBuilder.Entity<Comment>(entity =>
            {
                entity.ToTable("comment");

                entity.Property(e => e.CommentId).HasColumnName("comment_id");

                entity.Property(e => e.Comment1).HasColumnName("comment");

                entity.Property(e => e.CreatedAt)
                    .IsRequired()
                    .IsRowVersion()
                    .IsConcurrencyToken()
                    .HasColumnName("created_at");

                entity.Property(e => e.PostId).HasColumnName("post_id");

                entity.Property(e => e.UserId).HasColumnName("user_id");

                entity.HasOne(d => d.Post)
                    .WithMany(p => p.Comments)
                    .HasForeignKey(d => d.PostId)
                    .OnDelete(DeleteBehavior.ClientSetNull)
                    .HasConstraintName("FK_comment_post");

                entity.HasOne(d => d.User)
                    .WithMany(p => p.Comments)
                    .HasForeignKey(d => d.UserId)
                    .OnDelete(DeleteBehavior.ClientSetNull)
                    .HasConstraintName("FK_comment_users");
            });

            modelBuilder.Entity<Post>(entity =>
            {
                entity.ToTable("posts");

                entity.Property(e => e.PostId).HasColumnName("post_id");

                entity.Property(e => e.CatName)
                    .HasMaxLength(50)
                    .HasColumnName("cat_name");

                entity.Property(e => e.CreatedAt)
                    .IsRequired()
                    .IsRowVersion()
                    .IsConcurrencyToken()
                    .HasColumnName("created_at");

                entity.Property(e => e.Description).HasColumnName("description");

                entity.Property(e => e.PostImage)
                    .IsRequired()
                    .HasMaxLength(255)
                    .IsUnicode(false)
                    .HasColumnName("post_image");

                entity.Property(e => e.PostPublished)
                    .HasColumnName("post_published")
                    .HasDefaultValueSql("((0))");

                entity.Property(e => e.PostTitle)
                    .IsRequired()
                    .HasMaxLength(255)
                    .HasColumnName("post_title");

                entity.Property(e => e.UserId).HasColumnName("user_id");

                entity.HasOne(d => d.CatNameNavigation)
                    .WithMany(p => p.Posts)
                    .HasForeignKey(d => d.CatName)
                    .HasConstraintName("FK_category");

                entity.HasOne(d => d.User)
                    .WithMany(p => p.Posts)
                    .HasForeignKey(d => d.UserId)
                    .OnDelete(DeleteBehavior.ClientSetNull)
                    .HasConstraintName("FK_post_users");
            });

            modelBuilder.Entity<PostTag>(entity =>
            {
                entity.HasKey(e => new { e.PostId, e.TagId });

                entity.ToTable("post_tag");

                entity.Property(e => e.PostId).HasColumnName("post_id");

                entity.Property(e => e.TagId).HasColumnName("tag_id");

                entity.Property(e => e.CreatedAt)
                    .IsRequired()
                    .IsRowVersion()
                    .IsConcurrencyToken()
                    .HasColumnName("created_at");

                entity.HasOne(d => d.Post)
                    .WithMany(p => p.PostTags)
                    .HasForeignKey(d => d.PostId)
                    .OnDelete(DeleteBehavior.ClientSetNull)
                    .HasConstraintName("FK_pt_post");

                entity.HasOne(d => d.Tag)
                    .WithMany(p => p.PostTags)
                    .HasForeignKey(d => d.TagId)
                    .OnDelete(DeleteBehavior.ClientSetNull)
                    .HasConstraintName("FK_pt_tag");
            });

            modelBuilder.Entity<Tag>(entity =>
            {
                entity.ToTable("tags");

                entity.Property(e => e.TagId).HasColumnName("tag_id");

                entity.Property(e => e.CreatedAt)
                    .IsRequired()
                    .IsRowVersion()
                    .IsConcurrencyToken()
                    .HasColumnName("created_at");

                entity.Property(e => e.TagName)
                    .IsRequired()
                    .HasMaxLength(50)
                    .HasColumnName("tag_name");
            });

            modelBuilder.Entity<User>(entity =>
            {
                entity.ToTable("users");

                entity.Property(e => e.UserId).HasColumnName("user_id");

                entity.Property(e => e.CreatedAt)
                    .IsRequired()
                    .IsRowVersion()
                    .IsConcurrencyToken()
                    .HasColumnName("created_at");

                entity.Property(e => e.Email)
                    .IsRequired()
                    .HasMaxLength(255)
                    .IsUnicode(false)
                    .HasColumnName("email");

                entity.Property(e => e.Password)
                    .HasMaxLength(255)
                    .IsUnicode(false)
                    .HasColumnName("password");
            });

            OnModelCreatingPartial(modelBuilder);
        }

        partial void OnModelCreatingPartial(ModelBuilder modelBuilder);
    }
}
