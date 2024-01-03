import { defineComponent as N, computed as V, openBlock as c, createElementBlock as r, mergeModels as $, useModel as w, ref as p, watch as D, withDirectives as M, createElementVNode as b, toDisplayString as h, createCommentVNode as f, createVNode as g, unref as E } from "vue";
const S = ["value"], _ = /* @__PURE__ */ N({
  __name: "TimeInput",
  props: {
    type: {},
    value: {}
  },
  emits: ["change"],
  setup(i, { emit: n }) {
    const t = n, { type: l } = i, e = V(() => l === "hour" ? 23 : 59), m = (s) => {
      const a = s.target.value.slice(0, 2), o = Number(a);
      if (isNaN(o) || !o) {
        t("change", "00");
        return;
      }
      if (o >= 1 && o <= 9) {
        t("change", `0${o}`);
        return;
      } else if (o >= 10 && o <= e.value) {
        t("change", o.toString());
        return;
      }
      t("change", "00");
    };
    return (s, d) => (c(), r("input", {
      type: "text",
      inputmode: "numeric",
      value: s.value,
      onChange: m
    }, null, 40, S));
  }
}), O = {
  beforeMount(i, n) {
    i.clickOutsideEvent = (t) => {
      i !== t.target && !i.contains(t.target) && n.value(t);
    }, document.addEventListener("click", i.clickOutsideEvent);
  },
  unmounted(i) {
    document.removeEventListener("click", i.clickOutsideEvent);
  }
}, k = (i) => {
  const n = i.split(":");
  let t = "00", l = "00";
  if (n[0]) {
    const e = Number(n[0]);
    isNaN(e) || (e >= 1 && e <= 9 ? t = `0${e}` : e >= 10 && e <= 23 && (t = e.toString()));
  }
  if (n[1]) {
    const e = Number(n[1]);
    isNaN(e) || (e >= 1 && e <= 9 ? l = `0${e}` : e >= 10 && e <= 59 && (l = e.toString()));
  }
  return { hour: t, minute: l };
}, T = { class: "simple-timepicker" }, H = { key: 0 }, L = {
  key: 1,
  class: "simple-timepicker-value-placeholder"
}, x = {
  key: 0,
  class: "simple-timepicker-input"
}, B = /* @__PURE__ */ b("div", { class: "simple-timepicker-input-divider" }, ":", -1), j = /* @__PURE__ */ N({
  __name: "SimpleTimepicker",
  props: /* @__PURE__ */ $({
    placeholder: {}
  }, {
    modelValue: {},
    modelModifiers: {}
  }),
  emits: ["update:modelValue"],
  setup(i) {
    const n = w(i, "modelValue"), t = p(!1), l = () => {
      t.value = !1;
    }, e = () => {
      t.value = !t.value;
    }, m = O, { hour: s, minute: d } = k(n.value ?? ""), a = p(s), o = p(d);
    D(() => n.value, () => {
      const { hour: u, minute: v } = k(n.value ?? "");
      a.value = u, o.value = v;
    });
    const C = (u) => {
      n.value = `${u}:${o.value}`;
    }, y = (u) => {
      n.value = `${a.value}:${u}`;
    };
    return (u, v) => M((c(), r("div", T, [
      b("div", {
        class: "simple-timepicker-value",
        onClick: e
      }, [
        n.value ? (c(), r("div", H, h(n.value), 1)) : u.placeholder ? (c(), r("div", L, h(u.placeholder), 1)) : f("", !0)
      ]),
      t.value ? (c(), r("div", x, [
        g(_, {
          type: "hour",
          value: a.value,
          onChange: C
        }, null, 8, ["value"]),
        B,
        g(_, {
          type: "minute",
          value: o.value,
          onChange: y
        }, null, 8, ["value"])
      ])) : f("", !0)
    ])), [
      [E(m), l]
    ]);
  }
});
export {
  j as SimpleTimepicker
};
