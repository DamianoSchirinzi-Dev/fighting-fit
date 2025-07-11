import { client } from "@/sanity/lib/client";
import {
  homepageQuery,
  classesQuery,
  coachesQuery,
  testimonialsQuery,
} from "@/sanity/lib/queries";
import { urlFor } from "@/sanity/lib/image";
import { HomePage } from "@/types/homePage";
import { ClassType } from "@/types/class";
import { Coach } from "@/types/coach";
import { Testimonial } from "@/types/testimonial";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Clock,
  MapPin,
  Phone,
  Mail,
  Users,
  Trophy,
  Target,
  Dumbbell,
  Shield,
  Star,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const iconMap = {
  Clock,
  MapPin,
  Phone,
  Mail,
  Users,
  Trophy,
  Target,
  Dumbbell,
  Shield,
  Star,
};

export default async function Home() {
  const data: HomePage = await client.fetch(homepageQuery);
  const classes: ClassType[] = await client.fetch(classesQuery);
  const coaches: Coach[] = await client.fetch(coachesQuery);
  const testimonials: Testimonial[] = await client.fetch(testimonialsQuery);

  return (
    <main className="min-h-screen">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-black/90 backdrop-blur-sm z-50 border-b border-red-600/20">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="text-2xl font-bold text-white">
            <span className="text-red-600">FIGHTING</span>FIT
          </div>
          <div className="hidden md:flex space-x-8">
            <Link
              href="#home"
              className="text-white hover:text-red-600 transition-colors"
            >
              Home
            </Link>
            <Link
              href="#about"
              className="text-white hover:text-red-600 transition-colors"
            >
              About
            </Link>
            <Link
              href="#classes"
              className="text-white hover:text-red-600 transition-colors"
            >
              Classes
            </Link>
            <Link
              href="#trainers"
              className="text-white hover:text-red-600 transition-colors"
            >
              Trainers
            </Link>
            <Link
              href="#contact"
              className="text-white hover:text-red-600 transition-colors"
            >
              Contact
            </Link>
          </div>
          <Button className="bg-red-600 hover:bg-red-700 text-white">
            Join Now
          </Button>
        </div>
      </nav>

      {/* Hero Section */}
      <section
        id="home"
        className="relative h-screen bg-black text-white flex items-center justify-center overflow-hidden"
      >
        <div className="absolute inset-0">
          <Image
            src={
              urlFor(data.heroImage).width(1920).height(1080).url() ||
              "/placeholder.svg"
            }
            alt={data.title}
            fill
            className="object-cover opacity-50"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-transparent" />
        </div>

        <div className="relative z-10 container mx-auto px-4 grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <Badge className="bg-red-600/20 text-red-400 border-red-600/30">
              {"#1 Fighting Gym in Manchester"}
            </Badge>
            <h1 className="text-5xl lg:text-7xl font-bold leading-tight">
              {data.title}
            </h1>
            <p className="text-xl lg:text-2xl text-gray-300 max-w-2xl">
              {data.subtitle}
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                size="lg"
                className="bg-red-600 hover:bg-red-700 text-white px-8 py-4 text-lg"
                asChild
              >
                {/* <Link href={data.ctaLink}>{data.ctaText}</Link> */}
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-white text-white hover:bg-white hover:text-black px-8 py-4 text-lg bg-transparent"
              >
                Watch Classes
              </Button>
            </div>
          </div>

          <div className="hidden lg:block">
            <div className="grid grid-cols-2 gap-4">
              {data.heroStats.map((stat, index) => {
                const IconComponent =
                  iconMap[stat.icon as keyof typeof iconMap] || Users;

                return (
                  <Card
                    key={index}
                    className="bg-white/10 backdrop-blur-sm border-white/20"
                  >
                    <CardContent className="p-6 text-center">
                      <IconComponent className="h-8 w-8 text-red-600 mx-auto mb-2" />
                      <div className="text-2xl font-bold">{stat.value}</div>
                      <div className="text-sm text-gray-300">{stat.label}</div>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <Badge className="bg-red-100 text-red-800">About Us</Badge>
              <h2 className="text-4xl font-bold text-gray-900">
                {data.aboutSection.heading}
              </h2>
              <p className="text-lg text-gray-600">{data.aboutSection.body}</p>
              <div className="grid grid-cols-2 gap-6">
                <div className="flex items-start space-x-3">
                  <Shield className="h-6 w-6 text-red-600 mt-1" />
                  <div>
                    <h3 className="font-semibold text-gray-900">
                      Expert Trainers
                    </h3>
                    <p className="text-sm text-gray-600">
                      Certified professionals with competition experience
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <Target className="h-6 w-6 text-red-600 mt-1" />
                  <div>
                    <h3 className="font-semibold text-gray-900">
                      All Skill Levels
                    </h3>
                    <p className="text-sm text-gray-600">
                      From beginners to professional fighters
                    </p>
                  </div>
                </div>
              </div>
              <Button className="bg-red-600 hover:bg-red-700 text-white">
                {data.aboutSection.ctaText}
              </Button>
            </div>
            <div className="relative">
              <Image
                src={urlFor(data.aboutSection.image).width(600).url()}
                alt="Gym"
                width={600}
                height={500}
                className="rounded-lg shadow-xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Classes Section */}
      <section id="classes" className="py-20 bg-black text-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <Badge className="bg-red-600/20 text-red-400 border-red-600/30 mb-4">
              Our Classes
            </Badge>
            <h2 className="text-4xl font-bold mb-4">Train Like a Champion</h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Choose from our diverse range of martial arts and fitness classes
              designed for all levels
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {classes.map((classItem, index) => (
              <Card
                key={index}
                className="bg-gray-900 border-gray-800 hover:border-red-600/50 transition-colors"
              >
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold text-white mb-2">
                    {classItem.name}
                  </h3>
                  <p className="text-gray-400 mb-4">{classItem.description}</p>
                  <div className="space-y-2">
                    <div className="flex items-center text-sm text-gray-300">
                      <Clock className="h-4 w-4 mr-2 text-red-600" />
                      {classItem.schedule}
                    </div>
                    <Badge
                      variant="outline"
                      className="border-red-600/30 text-red-400"
                    >
                      {classItem.level}
                    </Badge>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-12">
            <Button className="bg-red-600 hover:bg-red-700 text-white px-8 py-3">
              View Full Schedule
            </Button>
          </div>
        </div>
      </section>

      {/* Trainers Section */}
      <section id="trainers" className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <Badge className="bg-gray-200 text-gray-800 mb-4 text-xl">Our Team</Badge>
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Meet Your Coaches
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Learn from experienced fighters and certified trainers who are passionate about your progress.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {coaches.map((coach, index) => (
              <Card
                key={index}
                className="overflow-hidden shadow-sm hover:shadow-lg transition-shadow border border-gray-200"
              >
                <div className="aspect-square relative">
                  <Image
                    src={urlFor(coach.image).width(300).height(300).url()}
                    alt={coach.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-1">
                    {coach.name}
                  </h3>
                  {coach.role && (
                    <p className="text-sm text-gray-600 font-medium mb-2">
                      {coach.role}
                    </p>
                  )}
                  <p className="text-gray-600 text-sm mb-4">
                    {coach.bio}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {coach.specialties.map((specialty, idx) => (
                      <Badge
                        key={idx}
                        variant="outline"
                        className="border-gray-300 text-gray-700 bg-gray-100 text-xs"
                      >
                        {specialty}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-black text-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <Badge className="bg-red-600/20 text-red-400 border-red-600/30 mb-4">
              Testimonials
            </Badge>
            <h2 className="text-4xl font-bold mb-4">What Our Members Say</h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="bg-gray-900 border-gray-800">
                <CardContent className="p-6">
                  <div className="flex mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star
                        key={i}
                        className="h-5 w-5 text-yellow-400 fill-current"
                      />
                    ))}
                  </div>
                  <p className="text-gray-300 mb-4">"{testimonial.text}"</p>
                  <p className="font-semibold text-white">
                    - {testimonial.name}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12">
            <div>
              <Badge className="bg-red-100 text-red-800 mb-4">
                Get In Touch
              </Badge>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">
                Ready to Start Training?
              </h2>
              <p className="text-lg text-gray-600 mb-8">
                Join our community of fighters and fitness enthusiasts. Contact
                us today to book your first class.
              </p>

              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <MapPin className="h-5 w-5 text-red-600" />
                  <span className="text-gray-700">
                    123 Fighting Street, Manchester, UK
                  </span>
                </div>
                <div className="flex items-center space-x-3">
                  <Phone className="h-5 w-5 text-red-600" />
                  <span className="text-gray-700">+44 161 123 4567</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Mail className="h-5 w-5 text-red-600" />
                  <span className="text-gray-700">
                    info@fightingfitmanchester.com
                  </span>
                </div>
                <div className="flex items-center space-x-3">
                  <Clock className="h-5 w-5 text-red-600" />
                  <span className="text-gray-700">
                    Mon-Fri: 6AM-10PM, Sat-Sun: 8AM-8PM
                  </span>
                </div>
              </div>
            </div>

            <Card>
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">
                  Book Your Free Trial
                </h3>
                <form className="space-y-4 text-black">
                  <div className="grid grid-cols-2 gap-4">
                    <input
                      type="text"
                      placeholder="First Name"
                      className=" px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-600 focus:border-transparent"
                    />
                    <input
                      type="text"
                      placeholder="Last Name"
                      className="px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-600 focus:border-transparent"
                    />
                  </div>
                  <input
                    type="email"
                    placeholder="Email Address"
                    className=" w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-600 focus:border-transparent"
                  />
                  <input
                    type="tel"
                    placeholder="Phone Number"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-600 focus:border-transparent"
                  />
                  <select className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-600 focus:border-transparent">
                    <option>Select a class</option>
                    <option>Boxing</option>
                    <option>Muay Thai</option>
                    <option>Brazilian Jiu-Jitsu</option>
                    <option>MMA</option>
                    <option>Kickboxing</option>
                  </select>
                  <textarea 
                    placeholder="Tell us about your goals..."
                    rows={4}
                    className="text-black w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-600 focus:border-transparent"
                  />
                  <Button className="w-full bg-red-600 hover:bg-red-700 text-white py-3">
                    Book Free Trial
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="text-2xl font-bold mb-4">
                <span className="text-red-600">FIGHT</span>FIT
              </div>
              <p className="text-gray-400">
                Manchester's premier fighting gym, training champions since
                2010.
              </p>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Classes</h3>
              <ul className="space-y-2 text-gray-400">
                <li>Boxing</li>
                <li>Muay Thai</li>
                <li>Brazilian Jiu-Jitsu</li>
                <li>MMA</li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Quick Links</h3>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <Link href="#about">About</Link>
                </li>
                <li>
                  <Link href="#classes">Classes</Link>
                </li>
                <li>
                  <Link href="#trainers">Trainers</Link>
                </li>
                <li>
                  <Link href="#contact">Contact</Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Follow Us</h3>
              <div className="flex space-x-4">
                <Button
                  size="sm"
                  variant="outline"
                  className="border-gray-600 text-gray-400 hover:text-white bg-transparent"
                >
                  Facebook
                </Button>
                <Button
                  size="sm"
                  variant="outline"
                  className="border-gray-600 text-gray-400 hover:text-white bg-transparent"
                >
                  Instagram
                </Button>
              </div>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2024 FightingFit Manchester. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </main>
  );
}
