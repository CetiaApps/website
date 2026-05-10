import React from 'react';

const stats = [
  { value: '2', label: 'Live Apps' },
  { value: 'Android', label: 'Platform' },
  { value: '200+', label: 'SmartRecipe Recipes' },
  { value: 'AI', label: 'Milo Powered' },
  { value: '24/7', label: 'App Support' },
];

export default function StatsBar() {
  return (
    <section className="bg-primary py-8 px-6 md:px-10 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-wrap items-center justify-between gap-6">
          {stats?.map((stat, i) => (
            <div key={i} className="flex items-center gap-3 text-primary-foreground">
              <div className="text-3xl font-extrabold tracking-tight">{stat?.value}</div>
              <div className="text-sm font-medium opacity-80 leading-tight max-w-[80px]">{stat?.label}</div>
              {i < stats?.length - 1 && (
                <div className="hidden lg:block w-px h-8 bg-primary-foreground/20 ml-3" />
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}