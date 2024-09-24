import { Component } from "./link.styles";

export default function Link({
  children,
  url,
}: Readonly<{
  children: React.ReactNode;
  url: string;
}>) {
  return <Component href={url}>{children}</Component>;
}
