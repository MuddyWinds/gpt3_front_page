import React from 'react';
import { Article } from '../../components';
import { blog01, blog02, blog03, blog04, blog05 } from './imports';
import './blog.css';

function Blog() {
  return (
    <div className='muddy_blog section_padding'>
      <div className='muddy_blog-heading'>
        <h1 className='gradient_text'>
          A lot is happening. We are blogging about it.
        </h1>
      </div>
      <div className='muddy_blog-container'>
        <div className='muddy_blog-container_groupA'>
          < Article imgUrl={blog01} date="Sept 26,2021" text="GPT-3 and Open  AI is the future. Let us exlore how it is?" />
        </div>
        <div className='muddy_blog-container_groupB'>
          < Article imgUrl={blog02} date="Sept 26,2021" text="GPT-3 and Open  AI is the future. Let us exlore how it is?"/>
          < Article imgUrl={blog03} date="Sept 26,2021" text="GPT-3 and Open  AI is the future. Let us exlore how it is?"/>
          < Article imgUrl={blog04} date="Sept 26,2021" text="GPT-3 and Open  AI is the future. Let us exlore how it is?"/>
          < Article imgUrl={blog05} date="Sept 26,2021" text="GPT-3 and Open  AI is the future. Let us exlore how it is?"/>
        </div>
      </div>
    </div>
  );
}

export default Blog;
