import SupaBaseFunctions from "../supabase";

const supabase = new SupaBaseFunctions();

async function uploadFile(file: any) {
  const { data, error } = await supabase.updateFile("posts", file);
  if (error) {
    // Handle error
    console.log(error);
  } else {
    // Handle success
    console.log(data);
  }
}

export default uploadFile;
