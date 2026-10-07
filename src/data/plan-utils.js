// Shared, framework-independent filtering and enquiry helpers.
export const matchesCategory = (plan, category) => category === "All" ||
  (plan.categories || [plan.category]).includes(category);

export function filterPlans(items, { provider = "All", category = "All", query = "" } = {}) {
  const term = query.trim().toLocaleLowerCase();
  return items.filter((plan) =>
    (provider === "All" || plan.provider === provider) &&
    matchesCategory(plan, category) &&
    (!term || [plan.name, plan.planNo, plan.uin, plan.tagline, ...(plan.categories || [plan.category])]
      .join(" ").toLocaleLowerCase().includes(term))
  );
}

export function makeAskLink(number, plan) {
  const digits = String(number ?? "").replace(/\D/g, "");
  if (!/^[1-9]\d{7,14}$/.test(digits)) return "";
  const message = `Hello Arun, I would like to know more about ${plan.name}${plan.planNo ? ` (Plan ${plan.planNo})` : ""}${plan.uin ? `, UIN ${plan.uin}` : ""}.`;
  return `https://wa.me/${digits}?text=${encodeURIComponent(message)}`;
}
