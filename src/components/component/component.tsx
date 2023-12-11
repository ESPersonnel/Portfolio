/**
 * v0 by Vercel.
 * @see https://v0.dev/t/NGn1cCdb3A3
 */
import Link from "next/link"
import { CardContent, Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

export default function Component() {
  return (
    <div key="1" className="flex flex-col min-h-screen bg-gray-900 text-white font-serif">
      <header className="px-4 lg:px-6 h-16 flex items-center">
        <Link className="flex items-center justify-center" href="#">
          <Rotate3dIcon className="h-6 w-6 text-white" />
          <span className="ml-2 text-xl font-semibold">ESPersonnel</span>
        </Link>
        <nav className="ml-auto flex gap-4 sm:gap-6">
          <Link className="text-sm font-medium hover:underline underline-offset-4" href="#renders">
            Renders
          </Link>
          <Link className="text-sm font-medium hover:underline underline-offset-4" href="#profession">
            Profession
          </Link>
          <Link className="text-sm font-medium hover:underline underline-offset-4" href="#description">
            Description
          </Link>
        </nav>
      </header>
      <main className="flex-1">
        <section className="w-full pt-12 md:pt-24 lg:pt-32 border-y">
          <div className="px-4 md:px-6 space-y-10 xl:space-y-16">
            <div className="text-center">
              <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl xl:text-7xl">
                Welcome to my 3D world
              </h1>
              <p className="mx-auto max-w-[700px] text-gray-300 mt-4 md:text-lg">
                Exploring the world of 3D art creation and presenting it to you in its most refined form.
              </p>
              <Link
                className="inline-flex h-9 items-center justify-center rounded-md bg-gray-700 px-4 py-2 mt-4 text-sm font-medium"
                href="#contact"
              >
                Contact Me
              </Link>
            </div>
            <img
              alt="Hero"
              className="mx-auto aspect-[3/1] overflow-hidden rounded-t-xl object-cover"
              height="600"
              src="/images/espersonnel_robot_arms6.png"
              width="900"
            />
          </div>
        </section>

        <section className="w-full py-12 md:py-24 lg:py-32" id="renders">
          <div className="container space-y-12 px-4 md:px-6">
            <div className="text-center">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">My Latest Renders</h2>
            </div>
            <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
              <Card>
                <CardContent>
                  <img
                    alt="Render 1"
                    className="w-full h-full object-cover rounded-sm"
                    height="200"
                    src="/images/flipfluidtest.png"
                    style={{
                      aspectRatio: "200/200",
                      objectFit: "cover",
                    }}
                    width="200"
                  />
                </CardContent>
              </Card>
              <Card>
                <CardContent>
                  <img
                    alt="Render 2"
                    className="w-full h-full object-cover rounded-sm"
                    height="200"
                    src="/images/ocean_min__emission_render1.png"
                    style={{
                      aspectRatio: "200/200",
                      objectFit: "cover",
                    }}
                    width="200"
                  />
                </CardContent>
              </Card>
              <Card>
                <CardContent>
                  <img
                    alt="Render 3"
                    className="w-full h-full object-cover rounded-sm"
                    height="200"
                    src="images/mountain_sss.png"
                    style={{
                      aspectRatio: "200/200",
                      objectFit: "cover",
                    }}
                    width="200"
                  />
                </CardContent>
              </Card>
              <Card>
                <CardContent>
                  <img
                    alt="Render 4"
                    className="w-full h-full object-cover rounded-sm"
                    height="200"
                    src="images/piano_macro2.png"
                    style={{
                      aspectRatio: "200/200",
                      objectFit: "cover",
                    }}
                    width="200"
                  />
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-800" id="profession">
          <div className="px-4 md:px-6 space-y-10 xl:space-y-16 text-center">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">My Profession</h2>
            <p className="mx-auto max-w-[700px] text-gray-300 md:text-lg">
              Specialising in Simulation, Modeling, Lighting, and Architectural Visualization.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
              <Card className="transform transition-transform duration-500 hover:scale-105">
                <CardContent className="flex flex-col items-center">
                  <img
                    alt="Simulation"
                    className="w-full h-full object-cover rounded-sm"
                    height="200"
                    src="/placeholder.svg"
                    style={{
                      aspectRatio: "200/200",
                      objectFit: "cover",
                    }}
                    width="200"
                  />
                  <h3 className="mt-2 font-medium">Simulation</h3>
                  <p className="text-sm text-gray-300">Creating realistic simulations for various scenarios.</p>
                </CardContent>
              </Card>
              <Card className="transform transition-transform duration-500 hover:scale-105">
                <CardContent className="flex flex-col items-center">
                  <img
                    alt="Modeling"
                    className="w-full h-full object-cover rounded-sm"
                    height="200"
                    src="/placeholder.svg"
                    style={{
                      aspectRatio: "200/200",
                      objectFit: "cover",
                    }}
                    width="200"
                  />
                  <h3 className="mt-2 font-medium">Modeling</h3>
                  <p className="text-sm text-gray-300">Designing and creating 3D models for different purposes.</p>
                </CardContent>
              </Card>
              <Card className="transform transition-transform duration-500 hover:scale-105">
                <CardContent className="flex flex-col items-center">
                  <img
                    alt="Lighting"
                    className="w-full h-full object-cover rounded-sm"
                    height="200"
                    src="images/light_k_test1.png"
                    style={{
                      aspectRatio: "200/200",
                      objectFit: "cover",
                    }}
                    width="200"
                  />
                  <h3 className="mt-2 font-medium">Lighting</h3>
                  <p className="text-sm text-gray-300">Creating the perfect lighting for every scene.</p>
                </CardContent>
              </Card>
              <Card className="transform transition-transform duration-500 hover:scale-105">
                <CardContent className="flex flex-col items-center">
                  <img
                    alt="Architectural Visualization"
                    className="w-full h-full object-cover rounded-sm"
                    height="200"
                    src="/placeholder.svg"
                    style={{
                      aspectRatio: "200/200",
                      objectFit: "cover",
                    }}
                    width="200"
                  />
                  <h3 className="mt-2 font-medium">Architectural Visualization</h3>
                  <p className="text-sm text-gray-300">Creating realistic architectural visualizations.</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-800" id="description">
          <div className="px-4 md:px-6 space-y-10 xl:space-y-16 text-center">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">About Me</h2>
            <p className="mx-auto max-w-[700px] text-gray-300 md:text-lg">
              I am a professional 3D artist with over a decade of experience in creating stunning 3D renders,
              animations, and simulations. My work ranges from abstract art to realistic architectural visualizations. I
              am passionate about creating compelling visual experiences, pushing the boundaries of what is possible
              with 3D art.
            </p>
          </div>
        </section>

        <section className="w-full py-12 md:py-24 lg:py-32" id="contact">
          <div className="px-4 md:px-6 space-y-10 xl:space-y-16 text-center">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">Get in Touch</h2>
            <p className="mx-auto max-w-[700px] text-gray-300 md:text-lg">
              If you would like to commission a 3D render or have any other inquiries, please do not hesitate to contact
              me. I am always open to new opportunities and collaborations.
            </p>
            <Button className="mx-auto" size="lg" variant="outline">
              Send a Message
            </Button>
          </div>
        </section>
      </main>
      <footer className="h-16 flex items-center justify-center text-gray-300 text-sm">
        © 3D Artist. All rights reserved.
      </footer>
    </div>
  )
}

function Rotate3dIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M16.466 7.5C15.643 4.237 13.952 2 12 2 9.239 2 7 6.477 7 12s2.239 10 5 10c.342 0 .677-.069 1-.2" />
      <path d="m15.194 13.707 3.814 1.86-1.86 3.814" />
      <path d="M19 15.57c-1.804.885-4.274 1.43-7 1.43-5.523 0-10-2.239-10-5s4.477-5 10-5c4.838 0 8.873 1.718 9.8 4" />
    </svg>
  )
}
