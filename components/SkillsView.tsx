import * as React from "react";
export default function SkillsView() {
  return (
    <>
      {/* <div className="w-full h-full mt-8 text-gray-500 font-medium text-base">
        <div className="text-gray-700 text-32 text-center font-medium p-8">MY SERVICE</div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">        
            <div className="md:px-8">
              <div className="text-base font-medium text-gray-500 dark:text-white mb-1">Pixel Perfect/Responsive Design</div>
              <div className="w-full bg-gray-300 rounded-full dark:bg-gray-700">
                <div className="bg-green-600 text-sm font-medium text-blue-100 text-center p-1 leading-none rounded-full" style={{width: "100%"}}>100%</div>
              </div>
            </div>
            <div className="md:px-8">
              <div className="text-base font-medium text-gray-500 dark:text-white mb-1">Mobile App UI</div>
              <div className="w-full bg-gray-300 rounded-full dark:bg-gray-700">
                <div className="bg-green-600 text-sm font-medium text-blue-100 text-center p-1 leading-none rounded-full" style={{width: "90%"}}>90%</div>
              </div>
            </div>
            <div className="md:px-8">
              <div className="text-base font-medium text-gray-500 dark:text-white mb-1">Backend/API Integration</div>
              <div className="w-full bg-gray-300 rounded-full dark:bg-gray-700">
                <div className="bg-blue-600 text-sm font-medium text-blue-100 text-center p-1 leading-none rounded-full" style={{width: "90%"}}>90%</div>
              </div>
            </div>
            <div className="md:px-8">
              <div className="text-base font-medium text-gray-500 dark:text-white mb-1">Data Science</div>
              <div className="w-full bg-gray-300 rounded-full dark:bg-gray-700">
                <div className="bg-red text-sm font-medium text-blue-100 text-center p-1 leading-none rounded-full" style={{width: "80%"}}>80%</div>
              </div>
            </div>
            <div className="md:px-8">
              <div className="text-base font-medium text-gray-500 dark:text-white mb-1">Automation and Bot</div>
              <div className="w-full bg-gray-300 rounded-full dark:bg-gray-700">
                <div className="bg-green-600 text-sm font-medium text-blue-100 text-center p-1 leading-none rounded-full" style={{width: "95%"}}>95%</div>
              </div>
            </div>
            <div className="md:px-8">
              <div className="text-base font-medium text-gray-500 dark:text-white mb-1">Web Scraping and Crawling</div>
              <div className="w-full bg-gray-300 rounded-full dark:bg-gray-700">
                <div className="bg-green-600 text-sm font-medium text-blue-100 text-center p-1 leading-none rounded-full" style={{width: "95%"}}>95%</div>
              </div>
            </div>        
        </div>
        
        <div className="relative flex justify-center items-center mt-16 mb-8">
          <div className="hidden md:block w-40 h-1 bg-gray-500"/>
          <div className="text-gray-700 text-xl md:text-28 text-center font-medium md:w-64">Frontend</div>
          <div className="hidden md:block w-40 h-1 bg-gray-500"/>
        </div>
        <div className="flex flex-wrap justify-center">                     
          <img src="assets/img/skills/html.png" className="p-1 w-12 h-12 md:w-24 md:h-24"/>
          <img src="assets/img/skills/css3.svg" className="p-1 w-12 h-12 md:w-24 md:h-24"/>
          <img src="assets/img/skills/js.png" className="p-1 w-12 h-12 md:w-24 md:h-24"/>
          <img src="assets/img/skills/ts.png" className="p-1 w-12 h-12 md:w-24 md:h-24"/>
          <img src="assets/img/skills/sass.png" className="p-1 w-12 h-12 md:w-24 md:h-24"/>
          <img src="assets/img/skills/jquery.png" className="p-1 w-12 h-12 md:w-24 md:h-24"/>
          <img src="assets/img/skills/bootstrap.png" className="p-1 w-12 h-12 md:w-24 md:h-24"/>
          <img src="assets/img/skills/react.png" className="p-1 w-12 h-12 md:w-24 md:h-24"/>
          <img src="assets/img/skills/reactNative.png" className="p-1 w-12 h-12 md:w-24 md:h-24"/>
          <img src="assets/img/skills/redux.png" className="p-1 w-12 h-12 md:w-24 md:h-24"/>
          <img src="assets/img/skills/next.png" className="p-1 w-12 h-12 md:w-24 md:h-24"/>
          <img src="assets/img/skills/vue.png" className="p-1 w-12 h-12 md:w-24 md:h-24"/>        
          <img src="assets/img/skills/webgl.png" className="p-1 w-12 h-12 md:w-24 md:h-24"/>
          <img src="assets/img/skills/three.png" className="p-1 w-12 h-12 md:w-24 md:h-24"/>
          <img src="assets/img/skills/d3js.png" className="p-1 w-12 h-12 md:w-24 md:h-24"/>
          <img src="assets/img/skills/chartjs.svg" className="p-1 w-12 h-12 md:w-24 md:h-24"/>
          <img src="assets/img/skills/tailwind.png" className="p-1 w-12 h-12 md:w-24 md:h-24"/>
          <img src="assets/img/skills/material-ui.png" className="p-1 w-12 h-12 md:w-24 md:h-24"/>
          <img src="assets/img/skills/antd.png" className="p-1 w-12 h-12 md:w-24 md:h-24"/>
        </div>

        <div className="relative flex justify-center items-center mt-16 mb-8">
          <div className="hidden md:block w-40 h-1 bg-gray-500"/>
          <div className="text-gray-700 text-xl md:text-28 text-center font-medium md:w-64">Backend</div>
          <div className="hidden md:block w-40 h-1 bg-gray-500"/>
        </div>
        <div className="flex flex-wrap justify-center">
            <img src="assets/img/skills/node.jpg" className="p-1 w-12 h-12 md:w-24 md:h-24"/>
            <img src="assets/img/skills/express.png" className="p-1 w-12 h-12 md:w-24 md:h-24"/>
            <img src="assets/img/skills/python.png" className="p-1 w-12 h-12 md:w-24 md:h-24"/>
            <img src="assets/img/skills/django.png" className="p-1 w-12 h-12 md:w-24 md:h-24"/>
            <img src="assets/img/skills/flask.png" className="p-1 w-12 h-12 md:w-24 md:h-24"/>
        </div>

        <div className="relative flex justify-center items-center mt-16 mb-8">
          <div className="hidden md:block w-40 h-1 bg-gray-500"/>
          <div className="text-gray-700 text-xl md:text-28 text-center font-medium md:w-64">DataBases</div>
          <div className="hidden md:block w-40 h-1 bg-gray-500"/>
        </div>
        <div className="flex flex-wrap justify-center">            
            <img src="assets/img/skills/mongodb.png" className="p-1 w-12 h-12 md:w-24 md:h-24"/>
            <img src="assets/img/skills/mysql.webp" className="p-1 w-12 h-12 md:w-24 md:h-24"/>
            <img src="assets/img/skills/sqlite.png" className="p-1 w-12 h-12 md:w-24 md:h-24"/>
            <img src="assets/img/skills/postgresql.png" className="p-1 w-12 h-12 md:w-24 md:h-24"/>
            <img src="assets/img/skills/cloudmongo.png" className="p-1 w-12 h-12 md:w-24 md:h-24"/>
            <img src="assets/img/skills/firebase.png" className="p-1 w-12 h-12 md:w-24 md:h-24"/>
        </div>

        <div className="relative flex justify-center items-center mt-16 mb-8">
          <div className="hidden md:block w-40 h-1 bg-gray-500"/>
          <div className="text-gray-700 text-xl md:text-28 text-center font-medium md:w-64">Version Control</div>
          <div className="hidden md:block w-40 h-1 bg-gray-500"/>
        </div>
        <div className="flex flex-wrap justify-center">          
            <img src="assets/img/skills/git.png" className="p-1 w-12 h-12 md:w-24 md:h-24"/>            
            <img src="assets/img/skills/github.png" className="p-1 w-12 h-12 md:w-24 md:h-24"/>
            <img src="assets/img/skills/gitlab.png" className="p-1 w-12 h-12 md:w-24 md:h-24"/>
            <img src="assets/img/skills/bitbucket.png" className="p-1 w-12 h-12 md:w-24 md:h-24"/>
        </div>

        <div className="relative flex justify-center items-center mt-16 mb-8">
          <div className="hidden md:block w-40 h-1 bg-gray-500"/>
          <div className="text-gray-700 text-xl md:text-28 text-center font-medium md:w-64">Other</div>
          <div className="hidden md:block w-40 h-1 bg-gray-500"/>
        </div>
        <div className="flex flex-wrap justify-center">          
            <img src="assets/img/skills/graphql.png" className="p-1 w-12 h-12 md:w-24 md:h-24"/>
            <img src="assets/img/skills/webRTC.png" className="p-1 w-12 h-12 md:w-24 md:h-24"/>
            <img src="assets/img/skills/docker.png" className="p-1 w-12 h-12 md:w-24 md:h-24"/>                      
            <img src="assets/img/skills/aws.png" className="p-1 w-12 h-12 md:w-24 md:h-24"/>
            <img src="assets/img/skills/googlecloud.svg" className="p-1 w-12 h-12 md:w-24 md:h-24"/>
            <img src="assets/img/skills/azure.png" className="p-1 w-12 h-12 md:w-24 md:h-24"/>
        </div>
      </div> */}
    </>
  );
}