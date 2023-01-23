import React from 'react';

import Post01 from '/images/blog-01.jpg';
import Post02 from '/images/blog-02.jpg';
import Post03 from '/images/blog-03.jpg';
import PostAuthor01 from '/images/blog-author-01.jpg';
import PostAuthor02 from '/images/blog-author-02.jpg';
import PostAuthor03 from '/images/blog-author-03.jpg';

const articles = [
  {
    id: 1,
    title: 'First Saturdays - Fun Evening',
    desc: "On the First Saturday of every month at 5 PM, we are creating a space, time and place for all who want to ENJOY more of GOD's presence!",
    image: '/images/blog-01.jpg',
    author: 'Adam Mukiibi',
    authorImage: 'images/blog-author-01.jpg',
    date: '2018-01-01',
    link: '#',
  },
  {
    id: 2,
    title: 'Join our Worship Team',
    desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore.',
    image: '/images/blog-02.jpg',
    author: 'Adam Mukiibi',
    authorImage: 'images/blog-author-01.jpg',
    date: '2018-01-01',
    link: '#',
  },
  {
    id: 3,
    title: 'Kids Service',
    desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore.',
    image: '/images/blog-03.jpg',
    author: 'Adam Mukiibi',
    authorImage: 'images/blog-author-01.jpg',
    date: '2018-01-01',
    link: '#',
  },
  
  
 
]

function Blog() {
  return (
    <section>
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="py-12 md:py-20">
          {/* Section header */}
          <div className="pb-12 md:pb-20">
            <h2 className="h2 font-cabinet-grotesk text-center md:text-left">Our blog</h2>
          </div>
          {/* Posts */}
          <div className="max-w-sm mx-auto md:max-w-none grid gap-12 md:grid-cols-3 md:gap-x-6 md:gap-y-8 items-start">
            {articles.map((article) => (
              <article className="h-full flex flex-col space-y-5" key={article.id}  data-aos="fade-down">
              <a className="block group overflow-hidden" href="#0">
                <img className="w-full aspect-[7/4] object-cover group-hover:scale-105 transition duration-700 ease-out" src={article.image} width="347" height="198" alt="Post 01" />
              </a>
              <div className="grow flex flex-col">
                <header>
                  <h3 className="h4 font-cabinet-grotesk font-bold mb-2">
                      <a className="inline-block decoration-blue-500 decoration-2 underline-offset-2 hover:underline" href={article.link}>{article.title}</a>
                  </h3>
                </header>
                  <p className="text-gray-500 grow">{article.desc}</p>
                <footer className="flex items-center text-sm mt-4">
                  <a href="#0">
                    <img className="rounded-full shrink-0 mr-3" src={article.authorImage} width="32" height="32" alt="Author 01" />
                  </a>
                  <div>
                      <span className="text-gray-500">By</span> <a className="font-medium decoration-blue-500 decoration-2 underline-offset-2 hover:underline" href="#0">{article.author}</a>
                  </div>
                </footer>
              </div>
            </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Blog;
