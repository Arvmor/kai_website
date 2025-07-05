export default function githubLoader({
  src,
  width,
  quality,
}: {
  src: string
  width: number
  quality?: number
}) {
  return `https://raw.githubusercontent.com/Arvmor/kai_website/refs/heads/master/public/${src}`
}