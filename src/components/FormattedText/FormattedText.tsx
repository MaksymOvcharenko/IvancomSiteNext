import React from 'react';
import parse from 'html-react-parser';

interface FormattedTextProps {
  children: string;
}

const FormattedText: React.FC<FormattedTextProps> = ({ children }) => {
  if (!children) return null;

  return <div>{parse(children)}</div>;
};

export default FormattedText;
