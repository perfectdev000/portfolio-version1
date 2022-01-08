import * as React from "react";
import Link from 'next/link'
export default function SkillsView() {
  return (
    <div className="w-full h-full mt-8 text-gray-500 font-medium text-base">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">        
          <div className="md:px-8">
            <div className="text-base font-medium text-gray-500 dark:text-white mb-1">Mobile Responsive Web Design</div>
            <div className="w-full bg-gray-200 rounded-full dark:bg-gray-700">
              <div className="bg-green-600 text-sm font-medium text-blue-100 text-center p-1 leading-none rounded-full" style={{width: "100%"}}>100%</div>
            </div>
          </div>
          <div className="md:px-8">
            <div className="text-base font-medium text-gray-500 dark:text-white mb-1">Mobile App UI</div>
            <div className="w-full bg-gray-200 rounded-full dark:bg-gray-700">
              <div className="bg-green-600 text-sm font-medium text-blue-100 text-center p-1 leading-none rounded-full" style={{width: "100%"}}>100%</div>
            </div>
          </div>
          <div className="md:px-8">
            <div className="text-base font-medium text-gray-500 dark:text-white mb-1">Backend/API Integration</div>
            <div className="w-full bg-gray-200 rounded-full dark:bg-gray-700">
              <div className="bg-blue-600 text-sm font-medium text-blue-100 text-center p-1 leading-none rounded-full" style={{width: "90%"}}>90%</div>
            </div>
          </div>
          <div className="md:px-8">
            <div className="text-base font-medium text-gray-500 dark:text-white mb-1">Data Science</div>
            <div className="w-full bg-gray-200 rounded-full dark:bg-gray-700">
              <div className="bg-red text-sm font-medium text-blue-100 text-center p-1 leading-none rounded-full" style={{width: "80%"}}>80%</div>
            </div>
          </div>
          <div className="md:px-8">
            <div className="text-base font-medium text-gray-500 dark:text-white mb-1">Clean Code</div>
            <div className="w-full bg-gray-200 rounded-full dark:bg-gray-700">
              <div className="bg-green-600 text-sm font-medium text-blue-100 text-center p-1 leading-none rounded-full" style={{width: "100%"}}>100%</div>
            </div>
          </div>        
      </div>
      <div className="flex justify-center">
        <div className="text-lg text-gray-700 font-semibold mt-8 md:w-[80%]">
          <div className="mb-4">
            <div className="mb-4">Programming Language : </div>
            <div className="flex flex-wrap pl-4">
              <img src="assets/img/skills/python.png" className="p-1 w-16 h-16 md:w-24 md:h-24"/>
              <img src="assets/img/skills/csharp.svg" className="p-1 w-16 h-16 md:w-24 md:h-24"/>
              <img src="assets/img/skills/php.png" className="p-1 w-16 h-16 md:w-24 md:h-24"/>
              <img src="assets/img/skills/html.png" className="p-1 w-16 h-16 md:w-24 md:h-24"/>
              <img src="assets/img/skills/css3.svg" className="p-1 w-16 h-16 md:w-24 md:h-24"/>
              <img src="assets/img/skills/js.jpg" className="p-1 w-16 h-16 md:w-24 md:h-24"/>
              <img src="assets/img/skills/ts.png" className="p-1 w-16 h-16 md:w-24 md:h-24"/>
              <img src="assets/img/skills/sass.png" className="p-1 w-16 h-16 md:w-24 md:h-24"/>
            </div>
            <hr className="border-dashed mt-4"/>
          </div>
          <div className="mb-4">
            <div className="mb-4">Frontend : </div>
            <div className="flex flex-wrap pl-4">
              <img src="assets/img/skills/jquery.png" className="p-1 w-16 h-16 md:w-24 md:h-24"/>
              <img src="assets/img/skills/bootstrap.png" className="p-1 w-16 h-16 md:w-24 md:h-24"/>
              <img src="assets/img/skills/react.png" className="p-1 w-16 h-16 md:w-24 md:h-24"/>
              <img src="assets/img/skills/reactNative.png" className="p-1 w-16 h-16 md:w-24 md:h-24"/>
              <img src="assets/img/skills/redux.png" className="p-1 w-16 h-16 md:w-24 md:h-24"/>
              <img src="assets/img/skills/next.jpg" className="p-1 w-16 h-16 md:w-24 md:h-24"/>
              <img src="assets/img/skills/vue.png" className="p-1 w-16 h-16 md:w-24 md:h-24"/>
              <img src="assets/img/skills/materialUI.png" className="p-1 w-16 h-16 md:w-24 md:h-24"/>
              <img src="assets/img/skills/antd.webp" className="p-1 w-16 h-16 md:w-24 md:h-24"/>
              <img src="assets/img/skills/tailwind.png" className="p-1 w-16 h-16 md:w-24 md:h-24"/>
              <img src="assets/img/skills/webgl.png" className="p-1 w-16 h-16 md:w-24 md:h-24"/>
              <img src="assets/img/skills/three.png" className="p-1 w-16 h-16 md:w-24 md:h-24"/>
              <img src="assets/img/skills/babylon.png" className="p-1 w-16 h-16 md:w-24 md:h-24"/>
              <img src="assets/img/skills/d3.svg" className="p-1 w-16 h-16 md:w-24 md:h-24"/>
              <img src="assets/img/skills/chartjs.svg" className="p-1 w-16 h-16 md:w-24 md:h-24"/>
            </div>
            <hr className="border-dashed mt-4"/>
          </div>
          <div className="mb-4">
            <div className="mb-4">Backend : </div>
            <div className="flex flex-wrap pl-4">
              <img src="assets/img/skills/node.jpg" className="p-1 w-16 h-16 md:w-24 md:h-24"/>
              <img src="assets/img/skills/express.png" className="p-1 w-16 h-16 md:w-24 md:h-24"/>            
              <img src="assets/img/skills/django.png" className="p-1 w-16 h-16 md:w-24 md:h-24"/>
              <img src="assets/img/skills/flask.png" className="p-1 w-16 h-16 md:w-24 md:h-24"/>
              <img src="assets/img/skills/laravel.jpg" className="p-1 w-16 h-16 md:w-24 md:h-24"/>
            </div>
            <hr className="border-dashed mt-4"/>
          </div>
          <div className="mb-4">
            <div className="mb-4">BlockChain : </div>
            <div className="flex flex-wrap pl-4">
              <img src="assets/img/skills/blockchain.jpg" className="p-1 w-16 h-16 md:w-24 md:h-24"/>
              <img src="assets/img/skills/bitcoin.png" className="p-1 w-16 h-16 md:w-24 md:h-24"/>            
              <img src="assets/img/skills/ethereum.png" className="p-1 w-16 h-16 md:w-24 md:h-24"/>
              <img src="assets/img/skills/binanceCoin.jpg" className="p-1 w-16 h-16 md:w-24 md:h-24"/>
            </div>
            <hr className="border-dashed mt-4"/>
          </div>
          <div className="mb-4">
            <div className="mb-4">Other Skills : </div>
            <div className="flex flex-wrap pl-4">
              <img src="assets/img/skills/webRTC.png" className="p-1 w-16 h-16 md:w-24 md:h-24"/>
              <img src="assets/img/skills/git.png" className="p-1 w-16 h-16 md:w-24 md:h-24"/>            
              <img src="assets/img/skills/github.png" className="p-1 w-16 h-16 md:w-24 md:h-24"/>
              <img src="assets/img/skills/gitlab.png" className="p-1 w-16 h-16 md:w-24 md:h-24"/>
              <img src="assets/img/skills/docker.png" className="p-1 w-16 h-16 md:w-24 md:h-24"/>
            </div>
            <hr className="border-dashed mt-4"/>
          </div>
          <div className="mb-4">
            <div className="mb-4">🛢 DataBases : </div>
            <div className="flex flex-wrap pl-4">
              <img src="assets/img/skills/mongodb.jpg" className="p-1 w-16 h-16 md:w-24 md:h-24"/>
              <img src="assets/img/skills/mysql.webp" className="p-1 w-16 h-16 md:w-24 md:h-24"/>
              <img src="assets/img/skills/sqlite.png" className="p-1 w-16 h-16 md:w-24 md:h-24"/>
              <img src="assets/img/skills/postgresql.png" className="p-1 w-16 h-16 md:w-24 md:h-24"/>
              {/* <img src="assets/img/skills/graphql.svg" className="p-1 w-16 h-16 md:w-24 md:h-24"/> */}
              <img src="assets/img/skills/cloudmongo.png" className="p-1 w-16 h-16 md:w-24 md:h-24"/>
              <img src="assets/img/skills/firebase.png" className="p-1 w-16 h-16 md:w-24 md:h-24"/>
            </div>
            <hr className="border-dashed mt-4"/>
          </div>
          <div className="mb-4">
            <div className="mb-4">⚖ Testing : </div>
            <div className="flex flex-wrap pl-4">
              <img src="assets/img/skills/mocha.svg" className="p-1 w-16 h-16 md:w-24 md:h-24"/>
              <img src="assets/img/skills/jasmine.png" className="p-1 w-16 h-16 md:w-24 md:h-24"/>
              <img src="assets/img/skills/postman.png" className="p-1 w-16 h-16 md:w-24 md:h-24"/>
            </div>
            <hr className="border-dashed mt-4"/>
          </div>
          <div className="mb-4">
            <div className="mb-4">🌧 Cloud Computing : </div>
            <div className="flex flex-wrap pl-4">
              <img src="assets/img/skills/aws.png" className="p-1 w-16 h-16 md:w-24 md:h-24"/>
              <img src="assets/img/skills/googlecloud.svg" className="p-1 w-16 h-16 md:w-24 md:h-24"/>
              <img src="assets/img/skills/azure.png" className="p-1 w-16 h-16 md:w-24 md:h-24"/>
            </div>
            <hr className="border-dashed mt-4"/>
          </div>
          <div className="mb-4">
            <div className="mb-4">💻 Operation System : </div>
            <div className="flex flex-wrap pl-4">
              <img src="assets/img/skills/windows.png" className="p-1 w-16 h-16 md:w-24 md:h-24"/>
              <img src="assets/img/skills/macox.png" className="p-1 w-16 h-16 md:w-24 md:h-24"/>
              <img src="assets/img/skills/linux.png" className="p-1 w-16 h-16 md:w-24 md:h-24"/>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}