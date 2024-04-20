import React from 'react';

const ArticleCollage = () => {
  const articles = [
    {
      id: 1,
      title: 'Article 1',
      thumbnail: '/thumbnails/article1.jpg',
      url: 'https://example.com/article1',
    },
    {
      id: 2,
      title: 'Article 2',
      thumbnail: '/thumbnails/article2.jpg',
      url: 'https://example.com/article2',
    },
    // Add more articles as needed
  ];

  return (
    <div className="max-w-6xl px-4 py-10 mx-auto sm:px-6 lg:px-8 lg:py-14">
      <div className="grid gap-6 sm:grid-cols-12">
        {articles.map(article => (
          <div key={article.id} className="col-span-12 sm:col-span-6 md:col-span-4 lg:col-span-3">
            <a href={article.url} target="_blank" rel="noopener noreferrer" className="block overflow-hidden transition-all ease-out group hover:rounded-none rounded-xl hover:scale-105 hover:shadow-lg">
              <div className="overflow-hidden aspect-w-12 aspect-h-7 sm:aspect-none">
                <img src={article.thumbnail} alt={article.title} className="object-cover w-full transition-transform duration-500 ease-in-out group-hover:scale-110" />
              </div>
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ArticleCollage;
