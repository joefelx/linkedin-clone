const { createClient } = require("@supabase/supabase-js");

const supabase = createClient(
  process.env.SUPABASE_URL,
  process.env.SUPABASE_KEY
);

class SupaBaseFunctions {
  supabase: any;
  constructor() {
    this.supabase = supabase;
  }

  async createBucket(bucketName: String) {
    const { data, error } = await supabase.storage.createBucket(bucketName, {
      public: false,
      allowedMimeTypes: ["image/png", "image/jpeg", "image/jpg"],
    });

    return { data, error };
  }

  async getBucket() {
    const { data, error } = await supabase.storage.getBucket("post");
    return { data, error };
  }

  async updateFile(bucketName: String, file: File) {
    const { data, error } = await supabase.storage
      .from(bucketName)
      .upload(`public/posts/${file.name}.${file.type}`, file, {
        cacheControl: "3600",
        upsert: false,
      });
    return { data, error };
  }
}

export default SupaBaseFunctions;
