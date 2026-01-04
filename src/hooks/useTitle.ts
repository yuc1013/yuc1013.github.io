import { useEffect } from "preact/hooks";


export function useTitle(title) {
  useEffect(() => {
    document.title = title
  }, [title])
}