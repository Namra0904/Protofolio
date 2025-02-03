import { Card, CardContent } from "@/components/ui/card";
import { contactInfo } from "@/common/data";

export default function GetInTouch() {

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
              <a href={item.href} key={index}>
                <Card className="relative shadow-md transition-all duration-300 transform hover:scale-105 hover:shadow-lg cursor-pointer border-0 dark:bg-zinc-900">
                  <CardContent className="flex items-center gap-4 p-6">
                    <Icon className="w-6 h-6 text-zinc-700 dark:text-zinc-400" />
                    <div>
                      <h2 className="font-semibold text-lg">{item.title}</h2>
                      <p className="text-zinc-700 dark:text-zinc-400">
                        {item.content}
                      </p>
                    </div>
                  </CardContent>
                </Card>
              </a>
            );
          })}
        </div>
      </div>
    </div>
  );
}