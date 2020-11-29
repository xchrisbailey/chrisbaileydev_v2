import matter from 'gray-matter';
import ReactMarkdown from 'react-markdown';
import SyntaxHighlighter from 'react-syntax-highlighter';

import Nav from '../../components/nav';

const PostTemplate = ({ content, data }) => {
  return (
    <>
      <Nav />
      <div className="container mx-auto">
        <h1>{data.title}</h1>
        <ReactMarkdown
          escapeHtml={true}
          source={content}
          renderers={{ code: CodeBlock }}
        />
      </div>
    </>
  );
};

const CodeBlock = ({ language, value }) => {
  return (
    <SyntaxHighlighter showLineNumbers={true} language={language}>
      {value}
    </SyntaxHighlighter>
  );
};

PostTemplate.getInitialProps = async (context) => {
  const { slug } = context.query;
  const content = await import(`../../../content/posts/${slug}.md`);
  const data = matter(content.default);

  return { ...data };
};

export default PostTemplate;
