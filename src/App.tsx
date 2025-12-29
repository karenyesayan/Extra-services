import Summary from "./Summary.js";
import ExtraList from "./ExtraList.js";
import { ExtrasProvider } from "./ExtrasContext.js";

export default function ExtraApp() {
  return (
    <ExtrasProvider>
      <main>
        <ExtraList />
        <Summary />
      </main>
    </ExtrasProvider>
  );
}
