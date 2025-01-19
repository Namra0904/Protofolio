// import { useState } from "react";
// import { Button } from "@/components/ui/button";
// import { Input } from "@/components/ui/input";
// import { Label } from "@/components/ui/label";
// import { Eye,EyeOff } from "lucide-react";
// import {
//   Card,
//   CardContent,
//   CardFooter,
//   CardHeader,
//   CardTitle,
//   CardDescription,
// } from "@/components/ui/card";

// export default function AdminLoginForm() {
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const [error, setError] = useState("");
//   const [showPassword, setShowPassword] = useState(false);

//   const togglePasswordVisibility = () => {
//     setShowPassword((prev) => !prev);
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//   };

//   return (
//     <div className="flex items-center justify-center absolute inset-0">
//       <div className="w-full max-w-sm">
//         <Card className="mx-auto max-w-sm shadow-md">
//           <CardHeader className="flex items-center text-center">
//             <CardTitle className="text-3xl font-bold text-center">
//               Admin Login
//             </CardTitle>
//             <CardDescription className="text-sm">
//               Enter your details to login to your account
//             </CardDescription>
//           </CardHeader>
//           <form onSubmit={handleSubmit}>
//             <CardContent className="space-y-4">
//               <div className="space-y-2">
//                 <Label htmlFor="email" className="text-left block">
//                   <span className="flex items-center">
//                     Email <p className="text-sm text-red-500 ml-1">*</p>
//                   </span>
//                 </Label>
//                 <Input
//                   id="email"
//                   type="email"
//                   placeholder="admin@example.com"
//                   value={email}
//                   onChange={(e) => setEmail(e.target.value)}
//                   required
//                 />
//               </div>
//               <div className="space-y-2">
//                 <Label htmlFor="password" className="text-left block">
//                   <span className="flex items-center">
//                     Password <p className="text-sm text-red-500 ml-1">*</p>
//                   </span>
//                 </Label>
//                 <div className="relative">
//                   <Input
//                     id="password"
//                     type={showPassword ? "text" : "password"}
//                     value={password}
//                     onChange={(e) => setPassword(e.target.value)}
//                     required
//                     className="pr-10" // Add padding for the eye icon
//                   />
//                   <button
//                     type="button"
//                     onClick={togglePasswordVisibility}
//                     className="absolute right-2 top-1/2 transform -translate-y-1/2 text-gray-600"
//                   >
//                     {showPassword ? <Eye /> : <EyeOff />}
//                   </button>
//                 </div>
//               </div>
//               {error && <p className="text-red-500 text-sm">{error}</p>}
//             </CardContent>
//             <CardFooter>
//               <Button type="submit" className="w-full">
//                 Login
//               </Button>
//             </CardFooter>
//           </form>
//         </Card>
//       </div>
//     </div>
//   );
// }


import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ExternalLink } from "lucide-react";
import Link from "react-router-dom";

export default function ExperienceCard() {
  return (
    <Card className="w-full max-w-3xl">
      <CardContent className="p-6 space-y-6">
        {/* Logo and Title Section */}
        <div className="space-y-4">
          <div className="w-16 h-16 bg-blue-700 text-white flex items-center justify-center rounded-lg">
            <span className="text-lg font-medium">H/DS</span>
          </div>
          <div>
            <h2 className="text-2xl font-semibold text-gray-900">
              Web Developer Intern
            </h2>
            <div className="flex items-center gap-2 text-gray-500 mt-1">
              <span>Humbee Design Studio</span>
              <span>•</span>
              <span>Internship</span>
            </div>
          </div>
        </div>

        {/* Duration and Location */}
        <div className="space-y-1 text-gray-500">
          <div className="flex items-center gap-2">
            <span>August 2024 - Present</span>
            <span>•</span>
            <span>4 Mos</span>
          </div>
          <div className="flex items-center gap-2">
            <span>Ahmedabad</span>
            <span>•</span>
            <span>On-Site</span>
          </div>
        </div>

        {/* Description */}
        <p className="text-gray-700 leading-relaxed">
          Developed a feature-rich canvas designer for invoice template
          designing, incorporating undo/redo functionality for efficient state
          management. Implemented a layer management system with drag-and-drop
          and nested group control. Integrated a dynamic property panel for
          real-time canvas object customization and added support for exporting
          multiple formats, including PNG, JPG, PDF, SVG, and JSON.
        </p>

        {/* Skills Section */}
        <div className="space-y-2">
          <h3 className="text-lg font-semibold text-gray-900">Skills</h3>
          <div className="flex flex-wrap gap-2">
            <Badge
              variant="secondary"
              className="bg-gray-100 hover:bg-gray-200 text-gray-700"
            >
              Angular
            </Badge>
            <Badge
              variant="secondary"
              className="bg-gray-100 hover:bg-gray-200 text-gray-700"
            >
              Web Development
            </Badge>
          </div>
        </div>

        {/* Company Website */}
        <div>
          <h3 className="text-lg font-semibold text-gray-900 mb-2">
            Company Website
          </h3>
          <Link
            href="https://humbeestudio.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 hover:text-blue-800 flex items-center gap-2 w-fit"
          >
            https://humbeestudio.com/
            <ExternalLink className="h-4 w-4" />
          </Link>
        </div>
      </CardContent>
    </Card>
  );
}

