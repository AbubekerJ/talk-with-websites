import { ragChat } from "../lib/rag-chat";
import { redis } from "../lib/redis";
import ChatWrapper from "../components/ChatWrapper";

const page = async ({ params }) => {
  const components = params.url;
  function constructUrl(components) {
    const url = components.map((component) => decodeURIComponent(component));

    return url.join("/");
  }

  const constructedUrl = constructUrl(components);
  const isIndexed = await redis.sismember("indexed-url", constructedUrl);
  const sessionId = "";
  if (!isIndexed) {
    await ragChat.context.add({
      type: "html",
      source: constructedUrl,
      config: { chunkOverlap: 50, chunkSize: 200 },
    });
  }

  redis.sadd("indexed-url", constructedUrl);

  return <ChatWrapper sessionId={sessionId} />;
};

export default page;
