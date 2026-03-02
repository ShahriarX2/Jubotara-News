
import Header from '@/components/common/Header/Header';
import Footer from '@/components/common/Footer';
import CountryWideSection from '@/components/home/CountryWideSection';
import SpecialCategorySection from '@/components/home/SpecialCategorySection';
import { getNews, getBreakingNews, getTrendingNews, getVideoNews } from '@/lib/api';
import Container from '@/components/common/Container';
import PremiumCategoryBlock from '@/components/home/PremiumCategoryBlock';
import TrendingNewsSection from '@/components/home/TrendingNewsSection';
import ThumbnailNewsSection from '@/components/home/ThumbnailNewsSection';
import TrendingBar from '@/components/common/Header/TrendingBar';
import HeronNewsSection from '@/components/home/HeronNewsSection';
import VideoSection from '@/components/home/VideoSection';

export default async function Home() {
  const allNews = await getNews();
  const breakingNews = await getBreakingNews();
  const trendingNews = await getTrendingNews();
  const videoNews = await getVideoNews();

  // Reference structure: 
  // Main featured (1) + Grid below it (4)
  const mainNews = allNews[2];
  const heroGridNews = allNews.slice(1, 5);

  // For CountryWide Section (National)
  const nationalMain = allNews[2];
  const nationalGrid = allNews.slice(0, 4);

  // Sports News (Title: খেলাধুলা)
  const sportsMain = allNews[3];
  const sportsSide = allNews.slice(0, 6);

  // Politics News (Title: রাজনীতি)
  const politicsMain = allNews[1];
  const politicsSide = allNews.slice(0, 8);

  return (
    <div className=" min-h-screen bg-[#eff3f6]">

      {/* Ad Space  */}
      <Container >
        <div className=" h-32 bg-gray-100 border-2 border-dashed border-gray-300 flex items-center justify-center font-bold text-gray-400">
          ADVERTISEMENT
        </div>

      </Container>
      <TrendingBar />


      <main className="pb-12 space-y-4">
        {/* Dynamic Hero Row matching reference */}
        <HeronNewsSection mainNews={mainNews} bottomNews={heroGridNews} />
        <TrendingNewsSection />
        <ThumbnailNewsSection
          title={"এক্সক্লুসিভ"}
          news={trendingNews}
        />
        {/* Politics Section */}
        <SpecialCategorySection
          title="রাজনীতি"
          mainNews={politicsMain}
          sideNews={politicsSide}
        />
        {/* Ad Space  */}
        <Container >
          <div className=" h-32 bg-gray-100 border-2 border-dashed border-gray-300 flex items-center justify-center font-bold text-gray-400">
            ADVERTISEMENT
          </div>

        </Container>
        {/* Country Wide Section */}
        <CountryWideSection
          title="সারাদেশ"
          featureNews={nationalMain}
          gridNews={nationalGrid}
        />

        {/* Video News Section */}
        <VideoSection videos={videoNews} />

        {/* Sports Section */}
        <SpecialCategorySection
          title="খেলাধুলা"
          mainNews={sportsMain}
          sideNews={sportsSide}
        />



        {/* Categories Section */}
        <Container className="">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-2 md:gap-4 xl:gap-6">
            <PremiumCategoryBlock title="জাতীয়" news={allNews.slice(0, 5)} />
            <PremiumCategoryBlock title="আন্তর্জাতিক" news={allNews.slice(3, 8)} />
          </div>
        </Container>


        {/* Ad Space  */}
        <Container >
          <div className=" h-32 bg-gray-100 border-2 border-dashed border-gray-300 flex items-center justify-center font-bold text-gray-400">
            ADVERTISEMENT
          </div>

        </Container>

        <Container className="">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <PremiumCategoryBlock title="খেলাধুলা (অন্যান্য)" news={allNews.slice(1, 4)} vertical={true} />
            <PremiumCategoryBlock title="বিনোদন" news={allNews.slice(4, 7)} vertical={true} />
            <PremiumCategoryBlock title="অন্যান্য" news={allNews.slice(2, 5)} vertical={true} />
          </div>
        </Container>
      </main>


    </div>
  );
}

