import Box from "@/components/Box";
import Hero from "@/components/Hero";
import Line from "@/components/Line";

export default function Home() {
  return (
    <>
      <Hero />
      <Line title='"آموزش‌ها"' />
      <div className='grid grid-cols-1 lg:grid-cols-2 mx-auto gap-x-11 gap-y-20 justify-center items-center w-4/6'>
        <Box
          title='HTML'
          image='html.png'
          desc='اولین قدم برای ساخت یک وبسایت، یادگیری زبان html است. مسیر یادگیری html بسیار ساده است ، پس در این مسیر کوتاه با ما همراه باش!'
          toturial='html'
        />
        <Box
          title='HTML'
          image='html.png'
          desc='اولین قدم برای ساخت یک وبسایت، یادگیری زبان html است. مسیر یادگیری html بسیار ساده است ، پس در این مسیر کوتاه با ما همراه باش!'
          toturial='html'
        />
        <Box
          title='HTML'
          image='html.png'
          desc='اولین قدم برای ساخت یک وبسایت، یادگیری زبان html است. مسیر یادگیری html بسیار ساده است ، پس در این مسیر کوتاه با ما همراه باش!'
          toturial='html'
        />
        <Box
          title='HTML'
          image='html.png'
          desc='اولین قدم برای ساخت یک وبسایت، یادگیری زبان html است. مسیر یادگیری html بسیار ساده است ، پس در این مسیر کوتاه با ما همراه باش!'
          toturial='html'
        />
      </div>
    </>
  );
}
