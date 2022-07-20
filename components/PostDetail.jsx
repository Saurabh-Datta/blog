import React from 'react'
import moment from 'moment';
import { RichText } from '@graphcms/rich-text-react-renderer';
import { WhatsappShareButton, WhatsappIcon, LinkedinShareButton, LinkedinIcon } from 'next-share';

const PostDetail = ({ post, share_url }) => {
  return (
    <div className="bg-white shadow-lg rounded-lg lg:p-8 pb-12 mb-8">
        <div className="relative overflow-hidden shadow-md mb-6">
            <img 
                src={post.featuredImage.url}
                alt={post.title}
                className="object-top h-full w-full rounded-t-lg"
            />
        </div>
        <div className="px-4 lg:px-0">
            <div className="flex items-center mb-8 w-full">
                <div className="flex items-center mb-4 lg:mb-0 w-full lg:w-auto mr-8">
                    <img 
                    alt={post.author.name}
                    height="30px"
                    width="30px"
                    className="align-middle rounded-full"
                    src={post.author.photo.url}
                    />
                    <p className="inline align-middle text-gray-700 ml-2 text-lg">{post.author.name}</p>
                </div>
                <div className="font-medium text-gray-700">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 inline mr-2 text-pink-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
                <span>
                    {moment(post.createdAt).format('DD MMMM YYYY')}  
                </span>   
                </div>
                <div className="mx-8">
                  <WhatsappShareButton url={share_url}><WhatsappIcon size={32} round /></WhatsappShareButton>
                </div>
                <div className="mx-0">
                  <LinkedinShareButton url={share_url}><LinkedinIcon size={32} round /></LinkedinShareButton>
                </div>
            </div>
            <h1 className="mb-8 text-3xl font-semibold">{post.title}</h1>
              <React.Fragment>
                <RichText 
                  content={post.content.raw} 
                  renderers={{
                    h1: ({ children }) => <h1 className="text-xl font-semibold mb-4">{children}</h1>,
                    h2: ({ children }) => <h2 className="text-xl font-semibold mb-4">{children}</h2>,
                    h3: ({ children }) => <h3 className="text-xl font-semibold mb-4">{children}</h3>,
                    h4: ({ children }) => <h4 className="text-xl font-semibold mb-4">{children}</h4>,
                    h5: ({ children }) => <h5 className="text-xl font-semibold mb-4">{children}</h5>,
                    h6: ({ children }) => <h6 className="text-xl font-semibold mb-4">{children}</h6>,
                    a: ({ children, href, title, openInNewTab }) => (openInNewTab?<a href={href} title={title} target="_blank" rel="noreferrer" className="text-blue-600">{children}</a>:<a href={href} title={title} className="text-blue-600">{children}</a>),
                    img: ({src, altText, height, width}) => <img alt={altText} height={height} width={width} src={src} />,
                    video: ({src, height, width}) => <video src={src} height={height} width={width}/>,
                    iframe: ({height, width, url}) => <iframe height={height} width={width} src={url} />,
                    p: ({ children }) => <p className="mb-8">{children}</p>,
                    ul: ({ children }) => <ul className="mb-8 list-disc">{children}</ul>,
                    ol: ({ children }) => <ol className="mb-8 list-decimal">{children}</ol>,
                    li: ({ children }) => <li className="mb-1 ml-4">{children}</li>,
                    table: ({ children }) => <table>{children}</table>,
                    table_head: ({ children }) => <thead>{children}</thead>,
                    table_header_cell: ({ children }) => <th>{children}</th>,
                    table_body: ({ children }) => <tbody>{children}</tbody>,
                    table_row: ({ children }) => <tr>{children}</tr>,
                    table_cell: ({ children }) => <td>{children}</td>,
                    blockquote: ({ children }) => <blockquote>{children}</blockquote>,
                    bold: ({ children }) => <strong>{children}</strong>,
                    italic: ({ children }) => <i>{children}</i>,
                    underline: ({ children }) => <u>{children}</u>,
                    code: ({ children }) => <code className="bg-slate-200 rounded-xl px-2 cursor-copy">{children}</code>,
                    code_block: ({ children }) => <code className="bg-slate-200 rounded-xl px-2 cursor-copy">{children}</code>,
                  }}  
                />
              </React.Fragment>
        </div>
    </div>
  );
}

export default PostDetail;