import React from 'react';

export default function BlogCard({ article, onOpenArticle }) {
  return (
    <div className="blog-card-neat" onClick={() => onOpenArticle(article)}>
      <div className="blog-card-top-row">
        <span className="blog-cat-pill-cyan">{article.category}</span>
        <span className="blog-read-time">{article.readTime}</span>
      </div>

      <h3 className="blog-card-title">{article.title}</h3>
      <p className="blog-card-summary">{article.summary}</p>

      <div className="blog-card-footer-neat">
        <div className="blog-author-mini">
          <div className="mini-avatar-cyan">{article.authorInitials || 'FD'}</div>
          <div className="mini-author-info">
            <strong className="author-name">{article.author}</strong>
            <span className="article-date">{article.date}</span>
          </div>
        </div>
        
        <button 
          className="btn-read-article-cyan"
          onClick={(e) => {
            e.stopPropagation();
            onOpenArticle(article);
          }}
          aria-label={`Read ${article.title}`}
        >
          <span>Read Paper</span>
          <i className="fas fa-arrow-right"></i>
        </button>
      </div>
    </div>
  );
}
