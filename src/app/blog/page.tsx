import { BlogPost } from "./blogpost"
import { Sidebar } from "./sidebar"
import Header from "./topnavbar"

const posts = [
  {
    title: "Mauris at orci non vulputate diam tincidunt nec",
    excerpt: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed mollis sapien lectus, sed sollicitudin velit dictum ut. Curabitur...",
    date: "Aug 09 2023",
    image: "/blog/blog1.png",
    author: "Self Access",
  },
  {
    title: "Aenean vitae in aliquam ultrices lectus. Etiam.",
    excerpt: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed mollis sapien lectus, sed sollicitudin velit dictum ut. Curabitur...",
    date: "Aug 09 2023",
    image: "/blog/blog2.png",
    author: "Self Access",
  },
  {
    title: "Sit nam congue feugiat nisl, mauris amet nisi.",
    excerpt: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed mollis sapien lectus, sed sollicitudin velit dictum ut. Curabitur...",
    date: "Aug 09 2023",
    image: "/blog/blog3.png",
    author: "Self Access",
  },
]

export default function Page() {
  return (
    <>
     <Header/>
    <div className="container mx-auto px-4 py-8">
      <div className="grid gap-10 lg:grid-cols-[2fr_1fr]">
        <main className="space-y-10">
          {posts.map((post, index) => (
            <BlogPost key={index} {...post} />
          ))}
        </main>
        <Sidebar />
      </div>
    </div>
    </>
   
  )
}

