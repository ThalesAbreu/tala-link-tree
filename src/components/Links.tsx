import { GithubLogo, InstagramLogo, LinkedinLogo, TwitterLogo } from 'phosphor-react'

export function Links() {
  return (
    <div className="mt-[60px] ml-auto mr-auto w-[300px] text-center box-border flex-1">
        <img 
          className="rounded-full border-[4px] p-[3.7px] border-indigo-600"
          src="https://github.com/ThalesAbreu.png" 
        />
        <h1 className="mt-6 mb-2 text-2xl">
          Thales Abreu
        </h1>
        <p className="">
          @thaless15
        </p>

        <ul className="mt-12 mb-12">
          <li>
            <a 
              className="h-[54px] w-full mb-4 uppercase text-xs justify-center items-center flex rounded-md bg-indigo-600 hover:bg-indigo-800 transition-colors"
              href="https://github.com/ThalesAbreu" target="_blank">
                <GithubLogo size={20}/>
                Github
            </a>
          </li>
          <li>
            <a 
              className="h-[54px] w-full mb-4 uppercase text-xs justify-center items-center flex rounded-md bg-indigo-600 hover:bg-indigo-800 transition-colors"
              href="https://www.instagram.com/thaless15/" target="_blank">
                <InstagramLogo size={20} />
                Instagram
            </a>
          </li>
          <li>
            <a 
              className="h-[54px] w-full mb-4 uppercase text-xs justify-center items-center flex rounded-md bg-indigo-600 hover:bg-indigo-800 transition-colors"
              href="https://twitter.com/O_Tala_ " target="_blank">
                <TwitterLogo size={20} />
                Twitter
            </a>
          </li>
          <li>
            <a 
              className="h-[54px] w-full mb-4 uppercase text-xs justify-center items-center flex rounded-md bg-indigo-600 hover:bg-indigo-800 transition-colors"
              href="https://www.linkedin.com/in/thales-abreu-961711208/?_l=pt_BR" target="_blank">
                <LinkedinLogo size={20} />
                Linkedin
            </a>
          </li>
        </ul>

        <footer>Created by <a href="https://github.com/ThalesAbreu"> Thales </a></footer>
    </div>
  )
}
