// CI-safe stub of Neynar client for build pipeline

export async function postCast(message: string) {
  console.log(`(stub) Would post cast: ${message}`);
  return { success: true, hash: "stub-hash" };
}
