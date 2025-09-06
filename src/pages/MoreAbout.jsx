import { GraduationCap, MapPin, Calendar, Award, Code, Database, Smartphone, Globe } from "lucide-react"
import profile from "../assets/saya.jpg"

const MoreAbout = () => {
  const skills = {
    Frontend: ["React.js", "JavaScript", "Tailwind CSS", "Bootstrap"],
    Backend: ["Node.js", "Express.js", "Laravel", "PHP", "Springboot", "REST APIs"],
    Mobile: ["Flutter", "Dart", "React Native"],
    Database: ["MongoDB", "PostgreSQL", "MySQL", "Firebase"],
    "DevOps & Tools": ["AWS", "Git", "GitHub", "Agile"],
  }

  const timeline = [
    {
      year: "2022 - Present",
      title: "Informatics Engineering Student",
      organization: "PENS (Electronic Engineering Polytechnic Institute of Surabaya)",
      description: "Pursuing Diploma (D3) in Informatics Engineering with focus on software development",
      type: "education",
    },
    {
      year: "2023 - Present",
      title: "Freelance Full-Stack Developer",
      organization: "Independent",
      description: "Developing web and mobile applications for various clients using modern technologies",
      type: "experience",
    },
    {
      year: "2022 - 2023",
      title: "Frontend Developer",
      organization: "Local Tech Projects",
      description: "Built responsive web applications using React.js and modern CSS frameworks",
      type: "experience",
    },
  ]

  const achievements = [
    {
      title: "15+ Projects Completed",
      description: "Successfully delivered web and mobile applications",
      year: "2022-2024",
    },
    {
      title: "Full-Stack Proficiency",
      description: "Mastered both frontend and backend development",
      year: "2023",
    },
    {
      title: "Modern Tech Stack",
      description: "Expertise in React, Laravel, Flutter ecosystem",
      year: "2024",
    },
  ]

  return (
    <section id="about" className="min-h-screen bg-gradient-to-br from-pink-100 to-green-100 font-fredoka">
      {/* Hero Section */}
        <div className="bg-[#e44c99]">
          <div className="max-w-6xl mx-auto px-6 py-16">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 items-start">
              {/* Main Profile Card */}
              <div className="lg:col-span-2 bg-bravepink rounded-2xl shadow-xl p-8 border-4 border-herogreen">
                <div className="flex flex-col md:flex-row items-start gap-8">
                  {/* Profile Image */}
                  <div className="relative flex-shrink-0">
                    <div className="w-32 h-32 rounded-2xl bg-gradient-to-br from-pink-500 to-green-500 flex items-center justify-center text-white text-4xl font-bold shadow-xl overflow-hidden">
                      <img
                        src={profile}
                        alt="Profile"
                        className="w-full h-full object-cover rounded-2xl"
                      />
                    </div>
                    <div className="absolute -bottom-2 -right-2 w-8 h-8 bg-yellow-400 rounded-full flex items-center justify-center border-4 border-white">
                      <div className="w-3 h-3 bg-white rounded-full"></div>
                    </div>
                  </div>

                  {/* Profile Info */}
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-3">
                      <h1 className="text-3xl md:text-4xl font-bold text-herogreen">About Me</h1>
                      <div className="px-3 py-1 bg-green-100 text-bravepink rounded-full text-sm font-medium">
                        Available for Work
                      </div>
                    </div>

                    <div className="flex flex-wrap items-center gap-4 mb-4 text-gray-600">
                      <div className="flex items-center gap-1 text-green-600">
                        <Calendar className="w-4 h-4" />
                        <span className="text-sm">20 years old</span>
                      </div>
                      <div className="flex items-center gap-1 text-herogreen">
                        <MapPin className="w-4 h-4" />
                        <span className="text-sm">Lamongan, East Java, Indonesia</span>
                      </div>
                      <div className="flex items-center gap-1 text-yellow-500">
                        <GraduationCap className="w-4 h-4" />
                        <span className="text-sm">PENS | EEPIS Student</span>
                      </div>
                    </div>

                    <p className="text-herogreen leading-relaxed mb-4 text-justify">
                      I'm a passionate full-stack developer and Informatics Engineering student at PENS | EEPIS. With expertise in
                      modern web and mobile technologies, I specialize in creating scalable applications using React.js,
                      Laravel, and Flutter.
                    </p>

                    <p className="text-herogreen leading-relaxed text-justify">
                      My journey in software development spans over 2 years, during which I've completed 15+ projects
                      ranging from responsive web applications to cross-platform mobile apps. I'm committed to writing
                      clean, efficient code and staying updated with the latest industry trends.
                    </p>
                  </div>
                </div>
              </div>

              {/* Stats Cards */}
              <div className="space-y-4">
                <div className="bg-bravepink text-herogreen border-herogreen border-4 rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow">
                  <div className="text-center">
                    <div className="text-3xl font-bold mb-1">15+</div>
                    <div className="text-sm uppercase tracking-wide">Projects Completed</div>
                  </div>
                </div>
                <div className="bg-bravepink text-herogreen border-herogreen border-4 rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow">
                  <div className="text-center">
                    <div className="text-3xl font-bold mb-1">2+</div>
                    <div className="text-sm uppercase tracking-wide">Years Experience</div>
                  </div>
                </div>
                <div className="bg-bravepink text-herogreen border-herogreen border-4 rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow">
                  <div className="text-center">
                    <div className="text-3xl font-bold mb-1">5+</div>
                    <div className="text-sm uppercase tracking-wide">Tech Stacks</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Skills Section */}
        <div className="bg-white">
          <div className="py-16 bg-bravepink">
            <div className="max-w-6xl mx-auto px-6">
              <div className="text-center mb-12">
                <h2 className="text-3xl font-bold text-herogreen mb-4">Skills & Technologies</h2>
                <p className="text-yellow-500 max-w-2xl mx-auto">
                  A comprehensive toolkit of modern technologies for building scalable applications
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {Object.entries(skills).map(([category, skillList]) => (
                  <div
                    key={category}
                    className="bg-bravepink rounded-xl p-6 shadow-lg border-4 border-herogreen hover:shadow-xl transition-shadow"
                  >
                    <div className="flex items-center gap-3 mb-4">
                      <div className="w-10 h-10 bg-black rounded-lg flex items-center justify-center">
                        {category === "Frontend" && <Globe className="w-5 h-5 text-white" />}
                        {category === "Backend" && <Code className="w-5 h-5 text-white" />}
                        {category === "Mobile" && <Smartphone className="w-5 h-5 text-white" />}
                        {category === "Database" && <Database className="w-5 h-5 text-white" />}
                        {category === "DevOps & Tools" && <Award className="w-5 h-5 text-white" />}
                      </div>
                      <h3 className="text-lg font-semibold text-herogreen">{category}</h3>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {skillList.map((skill) => (
                        <span
                          key={skill}
                          className="px-3 py-1 text-herogreen rounded-full text-sm font-medium hover:bg-green-100 hover:text-green-700 transition-colors"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

      {/* Timeline Section */}
      <div className="bg-white py-16">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Experience & Education Timeline */}
            <div className="bg-white rounded-2xl shadow-xl p-8 border-2 border-pink-200">
              <div className="flex items-center gap-3 mb-8">
                <div className="w-10 h-10 bg-gradient-to-br from-green-500 to-pink-500 rounded-full flex items-center justify-center">
                  <GraduationCap className="w-5 h-5 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900">Experience & Education</h3>
              </div>

              <div className="space-y-6">
                {timeline.map((item, index) => (
                  <div key={index} className="relative pl-6 border-l-2 border-gray-200 last:border-l-0">
                    <div className="absolute -left-2 top-0 w-4 h-4 bg-pink-500 rounded-full border-2 border-white"></div>
                    <div className="pb-6">
                      <div className="flex items-center gap-2 mb-2">
                        <span className="bg-pink-100 text-pink-700 px-3 py-1 rounded-full text-xs font-medium">
                          {item.year}
                        </span>
                        <span
                          className={`px-2 py-1 rounded-full text-xs font-medium ${item.type === "education"
                            ? "bg-green-100 text-green-700"
                            : "bg-yellow-100 text-yellow-700"
                            }`}
                        >
                          {item.type === "education" ? "Education" : "Experience"}
                        </span>
                      </div>
                      <h4 className="font-semibold text-gray-900 mb-1">{item.title}</h4>
                      <p className="text-sm text-green-600 mb-2">{item.organization}</p>
                      <p className="text-sm text-gray-600">{item.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Achievements */}
            <div className="bg-white rounded-2xl shadow-xl p-8 border-2 border-green-200">
              <div className="flex items-center gap-3 mb-8">
                <div className="w-10 h-10 bg-gradient-to-br from-yellow-400 to-pink-500 rounded-full flex items-center justify-center">
                  <Award className="w-5 h-5 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900">Key Achievements</h3>
              </div>

              <div className="space-y-6">
                {achievements.map((achievement, index) => (
                  <div key={index} className="p-4 bg-pink-50 rounded-lg hover:bg-green-50 transition-colors">
                    <div className="flex justify-between items-start mb-2">
                      <h4 className="font-semibold text-gray-900">{achievement.title}</h4>
                      <span className="bg-yellow-100 text-yellow-700 px-3 py-1 rounded-full text-xs font-medium">
                        {achievement.year}
                      </span>
                    </div>
                    <p className="text-sm text-gray-600">{achievement.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default MoreAbout
