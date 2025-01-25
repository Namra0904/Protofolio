import { Card, CardContent } from "@/components/ui/card";
import { Mail, Phone, Linkedin, Github } from "lucide-react";
import { BrowserRouter as Link } from "react-router-dom";

export default function GetInTouch() {
    const contactInfo = [
      {
        icon: Mail,
        title: "Email",
        content: "namramevada@gmail.com",
        href: "mailto:namramevada@gmail.com",
      },
      {
        icon: Phone,
        title: "Phone",
        content: "+91 8003895484",
        href: "tel:+918003895484",
      },
      {
        icon: Linkedin,
        title: "LinkedIn",
        content: "Connect with me",
        href: "https://www.linkedin.com/in/namra-mevada-5658092a0/",
      },
      {
        icon: Github,
        title: "GitHub",
        content: "View my work",
        href: "https://github.com/Namra0904",
      },
    ];

  return (
    <div className=" bg-white dark:bg-zinc-950 text-black dark:text-white py-16 mb-8">
      <div className="max-w-4xl mx-auto px-4">
        <h1 className="text-zinc-900 dark:text-white text-5xl font-bold text-center mb-14">
          <b>Get In Touch</b>
        </h1>
        <div className="grid md:grid-cols-2 gap-6 max-w-2xl mx-auto justify-center">
          {contactInfo.map((item, index) => {
            const Icon = item.icon;
            return (
              <Link href={item.href} key={index}>
                <Card className="relative shadow-md transition-all duration-300 transform hover:scale-105 hover:shadow-lg cursor-pointer dark:bg-zinc-950 border-0">
                  <CardContent className="flex items-center gap-4 p-6">
                    <Icon className="w-6 h-6 text-gray-500 dark:text-zinc-400" />
                    <div>
                      <h2 className="font-semibold text-lg">{item.title}</h2>
                      <p className="text-gray-600 dark:text-zinc-400">
                        {item.content}
                      </p>
                    </div>
                  </CardContent>
                </Card>
              </Link>
            );
          })}
        </div>
      </div>
    </div>
  );
}
