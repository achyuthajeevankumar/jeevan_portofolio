import React from "react";
import { Linkedin, Github, Instagram, ExternalLink, Mail } from "lucide-react";

const socialLinks = [
  {
    name: "LinkedIn",
    displayName: "Let's Connect",
    subText: "on LinkedIn",
    icon: Linkedin,
    url: "https://www.linkedin.com/in/jeevan-kumar-achyutha-066023274",
    color: "#0A66C2",
    gradient: "from-[#0A66C2] to-[#0077B5]",
    isPrimary: true
  },
  {
    name: "GitHub",
    displayName: "GitHub",
    subText: "@achyuthajeevankumar",
    icon: Github,
    url: "https://github.com/achyuthajeevankumar",
    color: "#ffffff",
    gradient: "from-[#333] to-[#24292e]"
  },
  {
    name: "Instagram",
    displayName: "Instagram",
    subText: "@_official_naidu_",
    icon: Instagram,
    url: "https://www.instagram.com/_official_naidu_?igsh=Y3ZhcDA5bWJxY2xh",
    color: "#E4405F",
    gradient: "from-[#833AB4] via-[#E4405F] to-[#FCAF45]"
  },
  {
    name: "Email",
    displayName: "Email Me",
    subText: "achyuthajeevankumar@gmail.com",
    icon: Mail,
    url: "mailto:achyuthajeevankumar@gmail.com",
    color: "#6366f1",
    gradient: "from-[#6366f1] to-[#a855f7]"
  },
];

const SocialLinks = () => {
  const linkedIn = socialLinks.find(link => link.isPrimary);
  const otherLinks = socialLinks.filter(link => !link.isPrimary);

  return (
    <div className="w-full bg-gradient-to-br from-white/10 to-white/5 rounded-2xl p-6 py-8 backdrop-blur-xl glitch-border">
      <h3 className="text-xl font-semibold text-white mb-6 flex items-center gap-2">
        <span className="inline-block w-8 h-1 bg-indigo-500 rounded-full"></span>
        Connect With Me
      </h3>

      {/* Primary LinkedIn Card */}
      <a href={linkedIn.url} target="_blank" rel="noopener noreferrer" className="block mb-4">
        <div className={`relative overflow-hidden rounded-xl bg-gradient-to-r ${linkedIn.gradient} p-[1px] group`}>
          <div className="bg-gray-900/90 rounded-xl p-4 flex items-center justify-between group-hover:bg-gray-900/70 transition-all duration-300">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full flex items-center justify-center" style={{ backgroundColor: `${linkedIn.color}20` }}>
                <linkedIn.icon className="w-5 h-5" style={{ color: linkedIn.color }} />
              </div>
              <div>
                <p className="text-white font-medium text-sm">{linkedIn.displayName}</p>
                <p className="text-gray-400 text-xs">{linkedIn.subText}</p>
              </div>
            </div>
            <ExternalLink className="w-4 h-4 text-gray-400 group-hover:text-white transition-colors" />
          </div>
        </div>
      </a>

      {/* Other Links */}
      <div className="grid grid-cols-1 gap-3">
        {otherLinks.map((link) => (
          <a key={link.name} href={link.url} target="_blank" rel="noopener noreferrer" className="block">
            <div className={`relative overflow-hidden rounded-xl bg-gradient-to-r ${link.gradient} p-[1px] group`}>
              <div className="bg-gray-900/90 rounded-xl p-3 flex items-center justify-between group-hover:bg-gray-900/70 transition-all duration-300">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full flex items-center justify-center" style={{ backgroundColor: `${link.color}20` }}>
                    <link.icon className="w-4 h-4" style={{ color: link.color }} />
                  </div>
                  <div>
                    <p className="text-white font-medium text-xs">{link.displayName}</p>
                    <p className="text-gray-400 text-xs">{link.subText}</p>
                  </div>
                </div>
                <ExternalLink className="w-3 h-3 text-gray-400 group-hover:text-white transition-colors" />
              </div>
            </div>
          </a>
        ))}
      </div>
    </div>
  );
};

export default SocialLinks;
