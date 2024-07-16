import React from "react";
import Link from "next/link";
import Head from "next/head";
import MainInfo from "user/components/MainInfo";
import Experience from "user/components/Experience";
import Education from "user/components/Education";
import Sidebar from "user/components/SideBar";
import HardSkills from "user/components/HardSkills";

export default function HomePage() {
  const LogoOracle = () => (
    <svg
      width="10"
      height="10"
      viewBox="0 -222.5 512 512"
      xmlns="http://www.w3.org/2000/svg"
      preserveAspectRatio="xMidYMid"
      className="h-full w-full rounded-full object-contain"
    >
      <path
        d="M221.034 43.303h33.832l-17.889-28.781-32.833 52.037h-14.942l39.935-62.508c1.736-2.525 4.63-4.051 7.84-4.051 3.104 0 5.998 1.473 7.682 3.946l40.093 62.613H269.81l-7.05-11.628h-34.253l-7.472-11.628zM376.251 54.93V.631h-12.68v59.614c0 1.631.631 3.21 1.841 4.42s2.841 1.894 4.63 1.894h57.825l7.472-11.628H376.25zm-209.78-9.734c12.313 0 22.31-9.944 22.31-22.256 0-12.313-9.997-22.31-22.31-22.31h-55.473V66.56h12.676v-54.3h41.956c5.893 0 10.628 4.789 10.628 10.682 0 5.892-4.735 10.68-10.628 10.68l-35.747-.052 37.851 32.99h18.416l-25.466-21.362h5.788zM32.97 66.559C14.77 66.56 0 51.827 0 33.622 0 15.416 14.77.632 32.97.632h38.32c18.204 0 32.963 14.784 32.963 32.99 0 18.205-14.759 32.937-32.964 32.937H32.97zm37.468-11.628c11.791 0 21.341-9.524 21.341-21.31 0-11.785-9.55-21.361-21.341-21.361h-36.62c-11.787 0-21.342 9.576-21.342 21.362 0 11.785 9.555 21.309 21.341 21.309h36.62zm240.78 11.628c-18.204 0-32.99-14.732-32.99-32.937 0-18.206 14.786-32.99 32.99-32.99h45.514l-7.42 11.628H312.06c-11.786 0-21.362 9.576-21.362 21.362 0 11.785 9.576 21.309 21.362 21.309h45.723l-7.472 11.628h-39.093zm155.06-11.628c-9.734 0-17.995-6.524-20.52-15.522h54.194l7.471-11.628h-61.665c2.525-8.945 10.786-15.521 20.52-15.521h37.2L511 .63h-45.565c-18.205 0-32.99 14.785-32.99 32.99 0 18.206 14.785 32.938 32.99 32.938h39.094L512 54.931h-45.723z"
        //fill="#EA1B22"
        fill="#16796F"
      />
    </svg>
  );

  const LogoAmdocs = () => (
    <svg
      version="1.1"
      id="layer"
      xmlns="http://www.w3.org/2000/svg"
      x="0px"
      y="0px"
      viewBox="0 0 652 652"
    >
      <linearGradient
        id="SVGID_1_"
        gradientUnits="userSpaceOnUse"
        x1="29.4636"
        y1="1133.6801"
        x2="202.5831"
        y2="1133.6801"
        gradientTransform="matrix(1 0 0 1 -5.21 -808.55)"
      >
        <stop offset="2.000000e-002" />
        <stop offset="0.1" />
        <stop offset="0.26" />
        <stop offset="0.47" />
        <stop offset="0.73" />
        <stop offset="0.77" />
      </linearGradient>
      <path
        d="M117.7,259.8H41.1l7.6,26.1h69.1c7.2,0,13.1,5.9,13.1,13.1v13.1H65.5c-21.6,0-39.2,17.5-39.2,39.2
	c0,21.6,17.5,39.2,39.2,39.2h52.2c21.6,0,39.2-17.6,39.1-39.2c0,0,0-0.1,0-0.1V299C156.8,277.4,139.3,259.9,117.7,259.8z M130.7,351
	c0,7.2-5.8,13.1-13,13.1H65.5c-7.2-0.4-12.7-6.7-12.2-13.9c0.4-6.6,5.7-11.8,12.2-12.2h65.2V351z"
        fill="#16796F"
      />
      <polygon
        points="194.2,312.1 170.4,312.1 170.4,338.2 201.7,338.2 "
        fill="#16796F"
      />
      <path
        d="M289.4,351.4H278v-6.3c-3.9,5-10,7.9-16.4,7.7c-14.5,0-26.2-11.8-26.2-26.3c0-0.4,0-0.8,0-1.2c-0.7-14.5,10.5-26.8,25-27.5
	c0.4,0,0.8,0,1.2,0c6.4-0.2,12.5,2.7,16.4,7.7v-6.4h11.4L289.4,351.4z M247.2,325.3c-0.7,8.7,5.8,16.3,14.5,17s16.3-5.8,17-14.5
	c0.1-0.8,0.1-1.7,0-2.5c0.7-8.7-5.8-16.3-14.5-17c-8.7-0.7-16.3,5.8-17,14.5C247.1,323.6,247.1,324.4,247.2,325.3z"
        fill="#16796F"
      />
      <path
        d="M387.7,318.6v32.9h-11.4v-29.1c0-8.8-4.5-13.7-12.2-13.7c-7.1-0.3-13.2,5.2-13.5,12.3c0,0.5,0,1,0,1.5v29h-11.5v-29.1
	c0-8.8-4.5-13.7-12.2-13.7c-7.2-0.3-13.2,5.2-13.5,12.4c0,0.5,0,1,0,1.4v29h-11.4v-52.3h11.3v6.4c3.7-5.2,9.7-8.1,16.1-7.8
	c7.2-0.3,14.1,3.3,18.1,9.3c4.2-6.3,11.5-9.9,19.1-9.3c11.1-0.6,20.6,7.9,21.2,19C387.7,317.3,387.7,318,387.7,318.6z"
        fill="#16796F"
      />
      <path
        d="M518.1,325.3c0.4,15.5-12,28.4-27.5,28.8c-15.5,0.4-28.4-12-28.8-27.5c-0.4-15.5,12-28.4,27.5-28.8c0.2,0,0.4,0,0.6,0
	c15-0.6,27.6,11.2,28.1,26.1C518.1,324.4,518.1,324.8,518.1,325.3z M473.3,325.3c0,9.1,7.3,16.4,16.4,16.4c9.1,0,16.4-7.3,16.4-16.4
	c0,0,0,0,0,0c0-9.1-7.3-16.4-16.4-16.4C480.7,308.9,473.3,316.2,473.3,325.3C473.3,325.3,473.3,325.3,473.3,325.3z"
        fill="#16796F"
      />
      <path
        d="M573.2,306.3l-7.3,7.8c-3.3-3.4-7.8-5.4-12.5-5.4c-8.6,0.1-15.6,7.1-15.5,15.7c0,0.3,0,0.7,0,1c-0.6,8.6,5.8,16.1,14.4,16.7
	c0.3,0,0.7,0,1,0c4.8-0.1,9.4-2.1,12.8-5.5l7.1,7.9c-5,5.5-12.1,8.6-19.5,8.4c-14.5,0.6-26.9-10.6-27.5-25.2c0-0.8,0-1.6,0-2.3
	c-0.6-14.5,10.6-26.9,25.2-27.5c0.8,0,1.6,0,2.3,0C561.1,297.7,568.2,300.7,573.2,306.3z"
        fill="#16796F"
      />
      <path
        d="M620.3,312.2c-4.9-2.8-10.5-4.4-16.2-4.5c-6.2,0-9.9,2.5-9.9,6.2s3.8,4.7,8.6,5.4l5.4,0.8c11.4,1.6,18.2,6.5,18.2,15.5
	c0,9.9-8.8,17.1-23.8,17.1c-7.9,0.2-15.8-2.2-22.3-6.6l5.3-8.6c4.9,3.8,11.1,5.7,17.3,5.4c7.8,0,11.9-2.4,11.9-6.4
	c0-2.9-2.8-5-9.1-5.8l-5.5-0.7c-11.6-1.6-17.8-7-17.8-15.4c0-10.4,8.3-16.8,21.6-16.8c7.4-0.2,14.8,1.7,21.2,5.5L620.3,312.2z"
        fill="#16796F"
      />
      <path
        d="M440,305.4v-19l11.4-4v69.1H440v-6.3c-3.9,5.1-10.1,7.9-16.5,7.7c-14.5,0-26.2-11.8-26.2-26.3c0-0.4,0-0.8,0-1.2
	c-0.7-14.5,10.5-26.8,25-27.5c0.4,0,0.8,0,1.2,0C430,297.5,436.1,300.4,440,305.4z M409.2,325.3c-0.5,8.7,6.2,16.2,14.9,16.7
	c8.7,0.5,16.2-6.2,16.7-14.9c0-0.6,0-1.2,0-1.8c0.5-8.7-6.2-16.2-14.9-16.7c-8.7-0.5-16.2,6.2-16.7,14.9
	C409.2,324.1,409.2,324.7,409.2,325.3z"
        fill="#16796F"
      />
    </svg>
  );

  return (
    <div className="bg-babyBlue">
      <Head>
        <title>Mi Currículum</title>
      </Head>
      <main className="flex flex-1 flex-col items-center justify-center text-center">
        <div className="bg-babyBlue mx-auto mb-6 w-3/5 rounded-lg pt-12 text-left">
          <h1 className="text-blueGreen ">
            <span className="main-title">
              Hi! I'm Joceline Rubio, <br /> I am a Software Developer looking
              for new challenges!
            </span>
          </h1>
          <br />
          <h2 className="text-blueGreen pt-11 ">
            <span className="introduction">
              I have 3 years of experience and looking forward to learn new
              things and working on amazing projects that can contribute a nice
              impact to the world...
              <br /> <br />I love coding, meditation, connect with people,
              nature, roller skating, traveling. ☺
            </span>
          </h2>
        </div>

        <div id="main-info" className=" mx-auto w-3/5 pt-20">
          <MainInfo />
        </div>

        <div className="bg-whites mt-10 w-full">
          <span className="text-sageGreen mx-auto mt-28 flex w-3/5 text-left font-sans text-2xl">
            Here is some of my recent experience...
          </span>
          <hr className="separator" />
        </div>

        <Experience
          icon={<LogoOracle />}
          date="2021 - 2024"
          company="ORACLE"
          companyDescription="Oracle is an information technology company that offers a wide range of business-oriented products and services that include Oracle Databases."
          position="Software Developer"
          tasks={[
            "Worked witth microservices using tools like kubernetes and docker.",
            "Development of unit tests for the existing and new code.",
            "Worked in a agile team having code reviews as a team.",
            "Contrbuted in the development of new features using Java and JavaScript.",
            "Contribution in QA task performing regression testing.",
            "Participation in every part of the development cycle.",
          ]}
        />

        <Experience
          icon={<LogoAmdocs />}
          date="2021 - 2024"
          company="ORACLE"
          companyDescription="Oracle is an information technology company that offers a wide range of business-oriented products and services that include Oracle Databases."
          position="Software Developer"
          tasks={[
            "Front-end development using Angular, HTML and CSS.",
            "Improved bash skills developing scripts to automate processes.",
            "Participated in a volunteer project writing code in Angular and Python.",
            "Worked in a agile team.",
          ]}
        />

        <div className="bg-whites mt-0 w-full">
          <span className="text-sageGreen mx-auto mb-2 mt-14 flex w-3/5 text-left font-sans text-2xl">
            Here is some of my academic experience...
          </span>
          <hr className="separator" />
        </div>

        <Education
          icon=""
          date="2015 - 2019"
          nameSchool="Universidad de Guadalajara"
          schoolDescription=""
          titleName="Bachelor's Degree in Computer Science Engineering"
        />

        <Education
          icon=""
          date="2010 - 2013"
          nameSchool="Colegio de Bachilleres del Estado de Jalisco"
          schoolDescription=""
          titleName="Associate's Degree in IT"
        />

        <div className="bg-whites mt-0 w-full">
          <span className="text-sageGreen mx-auto mb-2 mt-14 flex w-3/5 text-left font-sans text-2xl">
            Here are some of my skills...
          </span>
          <hr className="separator" />
        </div>

        <HardSkills
          frontendSkills={["HTML", "CSS", "JavaScript"]}
          backendSkills={["Java", "MySQL", "HANA"]}
          otherSkills={["Git", "Docker", "Shell-Script", "API", "Kubernetes"]}
        />
      </main>
    </div>
  );
}
