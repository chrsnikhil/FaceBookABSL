import Navbar from '@/components/Navbar';
import StorySection from '@/components/StorySection';
import CreatePost from '@/components/CreatePost';
import Feed from '@/components/Feed';
import Sidebar from '@/components/Sidebar';
import RightSidebar from '@/components/RightSidebar';

export default function Home() {
  return (
    <main className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <Navbar />
      <div className="pt-16 max-w-7xl mx-auto px-4">
        <div className="flex gap-6">
          {/* Left Sidebar */}
          <div className="hidden lg:block w-1/4 sticky top-20">
            <Sidebar />
          </div>

          {/* Main Content */}
          <div className="flex-1 max-w-2xl mx-auto w-full">
            <div className="space-y-4">
              <StorySection />
              <CreatePost />
              <Feed />
            </div>
          </div>

          {/* Right Sidebar */}
          <div className="hidden lg:block w-1/4 sticky top-20">
            <RightSidebar />
          </div>
        </div>
      </div>
    </main>
  );
}
