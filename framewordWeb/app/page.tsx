import Image from "next/image";
import Link from "next/link";
export default function Home() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-zinc-100 font-sans dark:bg-black">
      <main className="flex min-h-screen w-full max-w-4xl flex-col items-start  py-24 px-16  dark:bg-black bg-yellow-50 sm:items-start">
        <div className="flex flex-col items- gap-6 text-center sm:items-start sm:text-left">
          <h1>
            Jacob Wildlife Center
          </h1>
          <div className = "flex justify-center  ">
          <Image
          className="rounded-xl"
          src = "/images/badgers2.webP"
          alt ="picutre of badger"
          width={350}
          height={300}
          priority
          />
          
          </div>
          <p className="max-w-xl">
            Step into a world where nature thrives and every creature has a story to tell. Our Wildlife Center is more than just a place to see animals—it’s a home dedicated to protecting endangered species, restoring habitats, and inspiring people of all ages to care for the natural world.{" "}
            </p>
            <div className = "flex flex-col sm:flex-row gap-3 border border-solid border-green-600 rounded-xl p-2 bg-green-100" >

            <Link href = "/about">
              <Image
              className ="dark:invert  h-auto  object-cover rounded-xl "
              src ="/images/deer1.webP"
              alt="picture of deer"
              width={350}
              height={300}
              priority
              />
            </Link>
            <Link href = "/news">
            <Image
              className ="h-auto  object-cover rounded-xl"
              src="/images/fox.webP"
              width={350}
              height={300}
              alt = "picture of fox"
              priority
              /> 
            </Link>
            <Link href = "/kids">
            <Image
            className="h-auto  object-cover rounded-xl"  
            src="/images/owl.webP"
            width={350}
            height={300}
            alt="picture of owl"
            priority
            />
            </Link>
            </div>
            <p className = "max-w-xl "> 
            Our website will tell you what you need to know about what we do. Take a look for yourself to {" "}
            <Link href ="/animals" className="text-green-600 font-bold hover:text-green-800">see what animals we have for you.{" "}</Link>
            </p>
          
        </div>
        
      </main>
    </div>
  );
}
