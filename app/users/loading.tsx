import LoadingSpinner from "@/components/LoadingSpinner/LoadingSpinner";

export default function LoadingUsers() {
  return (<>
    <div>One moment please. Loading User Data...</div>
    <LoadingSpinner size="4rem" />
  </>
  );
}