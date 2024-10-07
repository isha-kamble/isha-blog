import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { config } from "@/config";
import { signOgImageUrl } from "@/lib/og-image";
import Markdown from "react-markdown";

const content = `# About Me

![Isha](https://github.com/isha-kamble/isha-blog/blob/108442f6904bd4e3dc0632a3b81b7302c8023977/public/images/Ishavercelpp.jpg)
Welcome to my blog! I’m Isha, a 26 year old passionate physiotherapist turned healthcare researcher. I graduated with my physiotherapy degree in 2022 and soon pursued my Master's in the UK. However, life took an unexpected turn, and I returned to India to continue my practice.

While I deeply value my background in physiotherapy, I found the demands of the profession to be both physically and mentally taxing. This experience ignited my desire to explore a different path within healthcare—one that combines my love for the field with a focus on research.

Now, I'm on the lookout for non-clinical roles in the healthcare industry, particularly in pharmacovigilance and clinical research. Through this blog, I aim to share my journey, insights, and the lessons I've learned along the way. Whether you’re a fellow healthcare professional or someone exploring career transitions, I hope you find inspiration and valuable information here.

Thank you for joining me on this exciting journey!

[Please send enquiries here](mailto:contact@dr-isha-kamble.com)
`;






export async function generateMetadata() {
  return {
    title: "About Me",
    description: "Learn more about Samantha and her travel adventures",
    openGraph: {
      title: "About Me",
      description: "Learn more about Samantha and her travel adventures",
      images: [
        signOgImageUrl({
          title: "Samantha",
          label: "About Me",
          brand: config.blog.name,
        }),
      ],
    },
  };
}

const Page = async () => {
  return (
    <div className="container mx-auto px-5">
      <Header />
      <div className="prose lg:prose-lg dark:prose-invert m-auto mt-20 mb-10 blog-content">
        <Markdown>{content}</Markdown>
      </div>
      <Footer />
    </div>
  );
};

export default Page;
