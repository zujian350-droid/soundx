export default function AppDownload() {
  return (
    <section id="app-download" className="py-16 bg-white border-y border-gray-100">
      <div className="container mx-auto px-4">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">
            下载拾光记 App 查看更多
          </h2>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a
              href="#"
              className="inline-flex items-center justify-center gap-2 bg-gray-900 text-white px-6 py-3 rounded-full text-base font-semibold hover:bg-gray-800 transition-colors shadow-sm w-full sm:w-auto"
              aria-label="iOS App Store 下载"
            >
              <svg className="w-5 h-5" viewBox="0 0 384 512" fill="currentColor" aria-hidden>
                <path d="M318.7 268.7c-.2-36.7 16.4-64.4 50-84.8-18.8-26.9-47.2-41.7-84.7-44.6-35.5-2.8-74.3 20.7-88.5 20.7-15 0-49.4-19.7-76.4-19.7C63.3 141.2 4 184.8 4 273.5q0 39.3 14.4 81.2c12.8 36.7 59 126.7 107.2 125.2 25.2-.6 43-17.9 75.8-17.9 31.8 0 48.3 17.9 76.4 17.9 48.6-.7 90.4-82.5 102.6-119.3-65.2-30.7-61.7-90-61.7-91.9zm-56.6-164.2c27.3-32.4 24.8-61.9 24-72.5-24.1 1.4-52 16.4-67.9 34.9-17.5 19.8-27.8 44.3-25.6 71.9 26.1 2 49.9-11.4 69.5-34.3z" />
              </svg>
              iOS App Store 下载
            </a>
            <a
              href="https://www.soundraw.top/share/SGJ.apk"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 bg-emerald-600 text-white px-6 py-3 rounded-full text-base font-semibold hover:bg-emerald-700 transition-colors shadow-sm w-full sm:w-auto"
              aria-label="Android APK 下载"
            >
              <svg className="w-5 h-5" viewBox="0 0 448 512" fill="currentColor" aria-hidden>
                <path d="M424.8 215c1.5-7.1 2.2-14.3 2.2-21.5 0-61.4-49.8-111.2-111.2-111.2-13.8 0-27 2.5-39.2 7.1C254 35.8 200.6 0 140.2 0 62.8 0 0 62.8 0 140.2c0 10.3 1.1 20.4 3.2 30.1C1.1 176.6 0 183.5 0 190.5c0 61.4 49.8 111.2 111.2 111.2 12.6 0 24.7-2.1 36-6 24.5 50.1 76.2 84.8 136.2 84.8 63.8 0 118.5-40 139.7-96 2.5.5 5.1.8 7.7.8 24.8 0 44.8-20.1 44.8-44.8 0-8.9-2.6-17.2-7.1-24.2zM283.4 316.4c-42.6 0-79.3-24.6-96.9-60.6 11.3 4 23.4 6.2 36 6.2 61.4 0 111.2-49.8 111.2-111.2 0-7.2-.7-14.4-2.2-21.5 4.5 7 7.1 15.3 7.1 24.2 0 24.7-20.1 44.8-44.8 44.8-2.6 0-5.2-.3-7.7-.8-21.2 56-75.9 96-139.7 96-60 0-111.7-34.7-136.2-84.8-11.3 3.9-23.4 6-36 6-61.4 0-111.2-49.8-111.2-111.2 0-7 .9-13.9 2.6-20.5C3.1 123.8 2 113.7 2 103.4 2 26 125.8-96.6 283.4 103.4c157.6 0 281.4 122.6 281.4 213 0 11.5-1.5 22.7-4.4 33.4 4.5 7 7.1 15.3 7.1 24.2 0 24.7-20 44.8-44.8 44.8-2.6 0-5.2-.3-7.7-.8-21.2 56-75.9 96-139.7 96-1.5 0-3-.1-4.5-.1 1.5-6.8 2.3-13.8 2.3-21z" />
              </svg>
              Android APK 下载
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
