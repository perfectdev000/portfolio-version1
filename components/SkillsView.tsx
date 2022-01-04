import * as React from "react";
import Link from 'next/link'
export default function SkillsView() {
  return (
    <div className="w-full h-full mt-8 text-gray-500 font-medium text-base">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div>
          <div className="flex justify-between mb-1">
            <span className="text-base font-medium text-gray-500 dark:text-white">Mobile Responsive Design</span>
            <span className="text-sm font-medium text-gray-500 dark:text-white">100%</span>
          </div>
          <div className="w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-700">
            <div className="bg-red h-2.5 rounded-full" style={{width: '100%'}}></div>
          </div>
        </div>
        <div>
          <div className="flex justify-between mb-1">
            <span className="text-base font-medium text-gray-500 dark:text-white">HTML/CSS/Canvas</span>
            <span className="text-sm font-medium text-gray-500 dark:text-white">100%</span>
          </div>
          <div className="w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-700">
            <div className="bg-red h-2.5 rounded-full" style={{width: '100%'}}></div>
          </div>
        </div>
        <div>
          <div className="flex justify-between mb-1">
            <span className="text-base font-medium text-gray-500 dark:text-white">JavaScript/JQuery</span>
            <span className="text-sm font-medium text-gray-500 dark:text-white">100%</span>
          </div>
          <div className="w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-700">
            <div className="bg-red h-2.5 rounded-full" style={{width: '100%'}}></div>
          </div>
        </div>
        <div>
          <div className="flex justify-between mb-1">
            <span className="text-base font-medium text-gray-500 dark:text-white">TypeScript</span>
            <span className="text-sm font-medium text-gray-500 dark:text-white">90%</span>
          </div>
          <div className="w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-700">
            <div className="bg-red h-2.5 rounded-full" style={{width: '90%'}}></div>
          </div>
        </div>
        <div>
          <div className="flex justify-between mb-1">
            <span className="text-base font-medium text-gray-500 dark:text-white">Ajax</span>
            <span className="text-sm font-medium text-gray-500 dark:text-white">100%</span>
          </div>
          <div className="w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-700">
            <div className="bg-red h-2.5 rounded-full" style={{width: '100%'}}></div>
          </div>
        </div>
        <div>
          <div className="flex justify-between mb-1">
            <span className="text-base font-medium text-gray-500 dark:text-white">Tailwind CSS</span>
            <span className="text-sm font-medium text-gray-500 dark:text-white">90%</span>
          </div>
          <div className="w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-700">
            <div className="bg-purple-600 h-2.5 rounded-full" style={{width: '90%'}}></div>
          </div>
        </div>
        <div>
          <div className="flex justify-between mb-1">
            <span className="text-base font-medium text-gray-500 dark:text-white">Material UI</span>
            <span className="text-sm font-medium text-gray-500 dark:text-white">70%</span>
          </div>
          <div className="w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-700">
            <div className="bg-purple-600 h-2.5 rounded-full" style={{width: '70%'}}></div>
          </div>
        </div>
        <div>
          <div className="flex justify-between mb-1">
            <span className="text-base font-medium text-gray-500 dark:text-white">Ant Design</span>
            <span className="text-sm font-medium text-gray-500 dark:text-white">80%</span>
          </div>
          <div className="w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-700">
            <div className="bg-purple-600 h-2.5 rounded-full" style={{width: '80%'}}></div>
          </div>
        </div>
        <div>
          <div className="flex justify-between mb-1">
            <span className="text-base font-medium text-gray-500 dark:text-white">Figma, AdobeXD</span>
            <span className="text-sm font-medium text-gray-500 dark:text-white">90%</span>
          </div>
          <div className="w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-700">
            <div className="bg-purple-600 h-2.5 rounded-full" style={{width: '90%'}}></div>
          </div>
        </div>
        <div>
          <div className="flex justify-between mb-1">
            <span className="text-base font-medium text-gray-500 dark:text-white">BootStrap3/4/5</span>
            <span className="text-sm font-medium text-gray-500 dark:text-white">100%</span>
          </div>
          <div className="w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-700">
            <div className="bg-red h-2.5 rounded-full" style={{width: '100%'}}></div>
          </div>
        </div>
        <div>
          <div className="flex justify-between mb-1">
            <span className="text-base font-medium text-gray-500 dark:text-white">WebGL/Three.js/D3.js/Chart.js</span>
            <span className="text-sm font-medium text-gray-500 dark:text-white">90%</span>
          </div>
          <div className="w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-700">
            <div className="bg-red h-2.5 rounded-full" style={{width: '90%'}}></div>
          </div>
        </div>
        <div>
          <div className="flex justify-between mb-1">
            <span className="text-base font-medium text-gray-500 dark:text-white">React/React Native/Redux/Next</span>
            <span className="text-sm font-medium text-gray-500 dark:text-white">90%</span>
          </div>
          <div className="w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-700">
            <div className="bg-red h-2.5 rounded-full" style={{width: '90%'}}></div>
          </div>
        </div>
        <div>
          <div className="flex justify-between mb-1">
            <span className="text-base font-medium text-gray-500 dark:text-white">Vue/Nuxt</span>
            <span className="text-sm font-medium text-gray-500 dark:text-white">70%</span>
          </div>
          <div className="w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-700">
            <div className="bg-red h-2.5 rounded-full" style={{width: '70%'}}></div>
          </div>
        </div>
        <div>
          <div className="flex justify-between mb-1">
            <span className="text-base font-medium text-gray-500 dark:text-white">Node.js/Express.js</span>
            <span className="text-sm font-medium text-gray-500 dark:text-white">95%</span>
          </div>
          <div className="w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-700">
            <div className="bg-indigo-600 h-2.5 rounded-full" style={{width: '95%'}}></div>
          </div>
        </div>
        <div>
          <div className="flex justify-between mb-1">
            <span className="text-base font-medium text-gray-500 dark:text-white">Python/Django/Flask</span>
            <span className="text-sm font-medium text-gray-500 dark:text-white">90%</span>
          </div>
          <div className="w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-700">
            <div className="bg-indigo-600 h-2.5 rounded-full" style={{width: '90%'}}></div>
          </div>
        </div>
        <div>
          <div className="flex justify-between mb-1">
            <span className="text-base font-medium text-gray-500 dark:text-white">PHP/Laravel</span>
            <span className="text-sm font-medium text-gray-500 dark:text-white">80%</span>
          </div>
          <div className="w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-700">
            <div className="bg-indigo-600 h-2.5 rounded-full" style={{width: '80%'}}></div>
          </div>
        </div>
        <div>
          <div className="flex justify-between mb-1">
            <span className="text-base font-medium text-gray-500 dark:text-white">Testing(Mocha/Jasmine/Postman)</span>
            <span className="text-sm font-medium text-gray-500 dark:text-white">80%</span>
          </div>
          <div className="w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-700">
            <div className="bg-red h-2.5 rounded-full" style={{width: '80%'}}></div>
          </div>
        </div>
        <div>
          <div className="flex justify-between mb-1">
            <span className="text-base font-medium text-gray-500 dark:text-white">Scraping & Crawling</span>
            <span className="text-sm font-medium text-gray-500 dark:text-white">100%</span>
          </div>
          <div className="w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-700">
            <div className="bg-red h-2.5 rounded-full" style={{width: '100%'}}></div>
          </div>
        </div>
        <div>
          <div className="flex justify-between mb-1">
            <span className="text-base font-medium text-gray-500 dark:text-white">Data Science</span>
            <span className="text-sm font-medium text-gray-500 dark:text-white">80%</span>
          </div>
          <div className="w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-700">
            <div className="bg-red h-2.5 rounded-full" style={{width: '80%'}}></div>
          </div>
        </div>
        <div>
          <div className="flex justify-between mb-1">
            <span className="text-base font-medium text-gray-500 dark:text-white">Git/GitHub/GitLab</span>
            <span className="text-sm font-medium text-gray-500 dark:text-white">95%</span>
          </div>
          <div className="w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-700">
            <div className="bg-red h-2.5 rounded-full" style={{width: '95%'}}></div>
          </div>
        </div>
        <div>
          <div className="flex justify-between mb-1">
            <span className="text-base font-medium text-gray-500 dark:text-white">Google/AWS</span>
            <span className="text-sm font-medium text-gray-500 dark:text-white">90%</span>
          </div>
          <div className="w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-700">
            <div className="bg-red h-2.5 rounded-full" style={{width: '90%'}}></div>
          </div>
        </div>
        <div>
          <div className="flex justify-between mb-1">
            <span className="text-base font-medium text-gray-500 dark:text-white">C++/C#</span>
            <span className="text-sm font-medium text-gray-500 dark:text-white">65%</span>
          </div>
          <div className="w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-700">
            <div className="bg-red h-2.5 rounded-full" style={{width: '65%'}}></div>
          </div>
        </div>
        <div>
          <div className="flex justify-between mb-1">
            <span className="text-base font-medium text-gray-500 dark:text-white">QT</span>
            <span className="text-sm font-medium text-gray-500 dark:text-white">60%</span>
          </div>
          <div className="w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-700">
            <div className="bg-red h-2.5 rounded-full" style={{width: '60%'}}></div>
          </div>
        </div>
        <div>
          <div className="flex justify-between mb-1">
            <span className="text-base font-medium text-gray-500 dark:text-white">Other(Golang/Ruby/...)</span>
            <span className="text-sm font-medium text-gray-500 dark:text-white">40%</span>
          </div>
          <div className="w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-700">
            <div className="bg-red h-2.5 rounded-full" style={{width: '40%'}}></div>
          </div>
        </div>
      </div>
    </div>
  );
}